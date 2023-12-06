import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./index.css";

const LogIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost/hospital-mng/backend/doctors/signin_doctor.php", formData);
      console.log(response.data);
      if (response.data.status === "success") {
        navigate(`/${response.data.user_id}/doctor/Info/`);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <div className="container d-flex d-center d-direction">
      <form onSubmit={handleLogin} className="form-container">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={handleChange} required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={handleChange} required />

        <button type="submit">Login</button>
        <p>
          Don't have an account?{" "}
          <a href="/doctor/create" className="signup-link">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
