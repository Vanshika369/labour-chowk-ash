// src/components/worker/RegistrationForm.js

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const WorkerRegistrationForm = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    skills: [],
  });

  const handleChange = (e) => {
    if (e.target.name === "skills") {
      const selectedSkills = Array.from(
        document.querySelectorAll('input[name="skills"]:checked')
      ).map((checkbox) => checkbox.value);

      setFormData({ ...formData, [e.target.name]: selectedSkills });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make an HTTP POST request to the server's registration endpoint
      const response = await axios.post(
        "http://localhost:5500/api/worker/register",
        formData
      );

      // Handle the response accordingly (show success message, redirect, etc.)
      console.log("Worker registration successful:", response.data);

      // Clear form fields
      setFormData({
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
        skills: [],
      });
      navigate('/login')
    } catch (error) {
      // Handle registration error
      console.error("Error registering worker:", error.response.data.error);
      alert(error.response.data.error);
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Skills:
          <div>
            <input
              type="checkbox"
              id="plumber"
              name="skills"
              value="Plumber"
              onChange={handleChange}
            />
            <label htmlFor="plumber">Plumber</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="electrician"
              name="skills"
              value="Electrician"
              onChange={handleChange}
            />
            <label htmlFor="electrician">Electrician</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="labourer"
              name="skills"
              value="Labourer"
              onChange={handleChange}
            />
            <label htmlFor="labourer">Labourer</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="mason"
              name="skills"
              value="Mason"
              onChange={handleChange}
            />
            <label htmlFor="mason">Mason</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="painter"
              name="skills"
              value="Painter"
              onChange={handleChange}
            />
            <label htmlFor="painter">Painter</label>
          </div>
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default WorkerRegistrationForm;