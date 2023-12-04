import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import GetPatients from "../get_patients";

const LogIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost/hospital-mng/backend/patients/signin.php", formData);
      console.log(response.data);
      if (response.data.status === "success") {
        if (response.data.role === 1) {
          console.log(response.data.role);
          navigate("/patient/Info");
        } else if (response.data.role === 2) {
          console.log("hellooz");
        }
      } else {
        navigate("user/create");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={handleChange} required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={handleChange} required />

        <button type="submit">Login</button>
      </form>
      <GetPatients />
    </div>
  );
};

export default LogIn;
