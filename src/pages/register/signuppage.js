import axios from "axios";
import "./signuppage.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {

    useEffect(() => {
        document.title = "Sign Up Page"
    }, []);

    const validatePassword = password => {
        if (!password) {
            return "Required";
        }
        if (password.length < 8) {
            return "Password greater 8 characters"
        }
        return;
    }

    const validateEmail = evt => {
        // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(evt);
    };

    return (
        <div>
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <div className="forgot-password text-right">
                    Already registered<Link to="/login" style={{ margin: 10 }}>sign in?</Link>
                </div>
            </form>
        </div>
    )
}
export default SignUpPage;
