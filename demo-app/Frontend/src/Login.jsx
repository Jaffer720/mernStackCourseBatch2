import React from "react";
import "./style.css";
import logo from './Images/logo Rinor.png';


const Login = () => {
    return (
        <React.Fragment>
            <div className="login">
                <div className="div">
                    <div className="overlap-group">
                        <img className="removebg" alt="Removebg" src={logo} />
                    </div>
                    <input className="input-field" placeholder="Enter email id" type="email" />
                    <div className="input-field-2">
                        <img className="eye" alt="Eye" src="eye.png" />
                        <div className="text-wrapper">Enter password</div>
                    </div>
                    <div className="text-wrapper-2">Email</div>
                    <div className="text-wrapper-3">Password</div>
                    <div className="text-wrapper-4">Login</div>
                    <button className="button">
                        <div className="text-wrapper-5">Login</div>
                    </button>
                    <div className="text-wrapper-6">Forgot Password?</div>
                    <div className="text-wrapper-7">Not a member?</div>
                    <div className="text-wrapper-8">Create account now</div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Login
