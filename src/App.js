import React from "react";
import HomePage from "./pages/home/homepage";
import LoginPage from "./pages/login/loginpage";
import ProfilePage from "./pages/profile/profilepage";
import PostPage from "./pages/posts/postpage";
import DetailPostPage from "./pages/posts/detailpostpage";
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignUpPage from "./pages/register/signuppage";


export default function App() {
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
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/login">
            <LoginPage />
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
