import React from "react";
import "../styles.css"
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="register-container">
            <h1>Sign Up</h1>
            <form action="">
            <div className="register-form">
                <input type="text" name="name" placeholder="Full Name" required="required" />
            </div>
            <div className="register-form">
                <input type="email" name="email" placeholder="Email" />
                {/* <p>OR</p>
                <input type="text" name="phoneno" maxLength="10" placeholder="Phone Number" /> */}
            </div>
            {/* <div className="register-form">
                <input type="password" name="password" placeholder="Password" required="required" />
            </div> */}
            <div className="register-form">
                <button className="register-btn">Sign Up</button>
            </div>
            </form>
            <p>Already have an Account? <Link to={"/login"}>Login</Link></p>
            <p>Register as Worker instead <Link to={"/worker/register"}>Register</Link> </p>
        </div>
    )
}

export default Register