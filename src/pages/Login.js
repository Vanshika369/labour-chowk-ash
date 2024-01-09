import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="login-container">
        <h1>Login</h1>
        <form action="">
          <div className="login-form">
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="login-form">
            <input type="password" name="password" placeholder="Password" required="required" />
          </div>
          <div className="login-form">

            <button className="login-btn">Login</button>
          </div>
        </form>
        <p>Don't have an Account? <Link to={'/register'}>SignUp</Link></p>
      </div>
    )
}

export default Login