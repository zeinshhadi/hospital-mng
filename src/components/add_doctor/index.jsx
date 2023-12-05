import React, { useState } from "react";
import axios from "axios";
import GetDoctors from "../get_doctors";

const CreateUser = () => {
  const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    specialization: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredInputs = Object.fromEntries(
      Object.entries(inputs).filter(([_, value]) => value !== null && value !== "")
    );

    axios
      .post("http://localhost/hospital-mng/backend/doctors/add_doctors.php", filteredInputs, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setInputs({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          specialization: "",
        });
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" name="first_name" onChange={handleChange} />
        <label>Last name: </label>
        <input type="text" name="last_name" onChange={handleChange} />
        <label>Email: </label>
        <input type="text" name="email" onChange={handleChange} />
        <label>Password: </label>
        <input type="text" name="password" onChange={handleChange} />
        <label>Specialization: </label>
        <input type="text" name="specialization" onChange={handleChange} />
        <button>Save</button>
      </form>
      <GetDoctors />
    </div>
  );
};

export default CreateUser;
