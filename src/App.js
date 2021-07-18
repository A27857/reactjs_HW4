import React from "react";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Profile from "./pages/profile/profile";
import Posts from "./pages/posts/post";
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostDetail from "./pages/posts/postdetail";

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

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/posts" exact>
            <Posts />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/posts/">
          <PostDetail></PostDetail>
          </Route>
        </Switch>
      </div>
      
    </Router>
    
  );
}
