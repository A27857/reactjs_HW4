import React from "react";
import HomePage from "./pages/home/homepage";
import LoginPage from "./pages/login/loginpage";
import ProfilePage from "./pages/profile/profilepage";
import PostPage from "./pages/posts/postpage";
import DetailPostPage from "./pages/posts/detailpostpage";
import "./App.css"
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignUpPage from "./pages/register/signuppage";
import { set } from "lodash";


export default function App() {
  //all route compodent can be use currentUsers and setCurrentUsers
  // save token is a state. have another choice is save token on localstorage
  const [currentUsers, setCurrentUsers] = useState({
    token: null,
    userId: null
  })
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/posts" exact>
            <PostPage />
          </Route>
          <Route path="/profile"
            render={() => {
              if (currentUsers.userId === null) {
                return <LoginPage
                  setCurrentUsers={setCurrentUsers}
                  currentUsers={currentUsers}
                  title = "You must to login before use this page!"
                />
              }
              else {
                return <ProfilePage
                currentUsers = {currentUsers}
                />
              }
            }}></Route>
          <Route path="/login">
            <LoginPage
              currentUsers={currentUsers}
              setCurrentUsers={setCurrentUsers}
            />
          </Route>
          <Route path="/detail/:id">
            <DetailPostPage />
          </Route>
        </Switch>
        <Route path="/signup/">
          <SignUpPage />
        </Route>
      </div>
    </Router>

  );
}
