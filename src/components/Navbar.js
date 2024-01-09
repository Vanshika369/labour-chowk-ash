import React from "react";
import '../styles.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <nav>
            <ul className='nav-bar'>
                <li className='logo'><a href='#'><img src='/images/logo.png' alt="Logo" /></a></li>
                <input type='checkbox' id='check' />
                <span className="menu">
                    <li><a href="#home">Home</a></li>
                    <li><Link to={"/aboutUs"}>About Us</Link></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    <label htmlFor="check" className="close-menu"><i className="fas fa-times"></i></label>
                </span>
                <span className="menu1">
                    <li id="login"><Link to={"/login"}>Login</Link></li>
                    <li id="signup"><Link id="signup" to={"/register"}>Sign Up</Link></li>
                </span>
                <label htmlFor="check" className="open-menu"><i className="fas fa-bars"></i></label>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;