import React, { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    gender: "",
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
      .post("http://localhost/hospital-mng/backend/patients/add_patients.php", filteredInputs, {
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
          gender: "",
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
        <label>Gender: </label>
        <input type="text" name="gender" onChange={handleChange} />
        <button>Save</button>
      </form>
    </div>
  );
};

export default CreateUser;
