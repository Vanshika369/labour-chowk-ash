import React, {useState} from "react";
import axios from "axios";
import "../styles.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: ""
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    } 

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(
                "http://localhost:5500/api/employer/register",
                formData
            )
            console.log("Employer Registration Successful:", response.data)

            setFormData({
                username: "",
                email: "",
                password: "",
                phoneNumber: "",
                address: ""
            })
            navigate('/login')
        } catch(error) {
            console.error("Error registering employer:",error.response.data.error)
            alert(error.response.data.error);
        }
    }

    return (
        <div className="register-container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="register-form">
                    <input type="text" name="username" placeholder="Full Name" value={formData.username} onChange={handleChange} required />
                </div>
                <div className="register-form">
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <input type="password" name='password' placeholder="Password" value={formData.password} onChange={handleChange}/>
                    <input type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange}/>
                </div>
                <div>
                    <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
                </div>
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