import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const CreateApp = () => {
  const { id } = useParams();

  const [doctors, setDoctors] = useState([]);
  const [formData, setFormData] = useState({
    patient_id: id,
    doctor_id: "",
    appointment_date: "",
  });

  useEffect(() => {
    axios.get("http://localhost/hospital-mng/backend/doctors/get_doctors.php").then(function (res) {
      setDoctors(res.data);
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost/hospital-mng/backend/appointments/create_appointment.php", formData)
      .then(function (res) {
        console.log("Appointment added successfully", res.data);
      })
      .catch(function (error) {
        console.error("Error adding appointment", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="doctor_id">Choose doctor:</label>
        <select id="doctor_id" name="doctor_id" value={formData.doctor_id} onChange={handleChange} required>
          <option value="" disabled>
            Select Doctor
          </option>
          {doctors.map((doctor) => (
            <option key={doctor.doctor_id} value={doctor.doctor_id}>
              {doctor.first_name} {doctor.specialization}
            </option>
          ))}
        </select>

        <label htmlFor="appointment_date">Appointment Date:</label>
        <input
          type="date"
          id="appointment_date"
          name="appointment_date"
          value={formData.appointment_date}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Appointment</button>
      </form>
    </div>
  );
};

export default CreateApp;
