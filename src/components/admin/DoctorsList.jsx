import React, { useEffect, useState } from "react";
import axios from "axios";

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost/hospital-mng/backend/doctors/get_doctors.php")
      .then(function (res) {
        setDoctors(res.data);
        setLoading(false);
      })
      .catch(function (error) {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (event, doctorId) => {
    event.preventDefault();

    if (!doctorId) {
      console.error("Invalid doctorId");
      return;
    }

    console.log("Deleting doctor with ID:", doctorId);

    axios
      .delete(`http://localhost/hospital-mng/backend/admin/delete_doctor.php?id=${doctorId}`)
      .then(function (res) {
        console.log("Response from server:", res.data);
        console.log("Doctor deleted successfully");

        setDoctors(doctors.filter((doctor) => doctor.doctor_id !== doctorId));
      })
      .catch(function (error) {
        console.error("Error deleting doctor", error);
      });
  };

  const handleEdit = (doctorId) => {
    console.log(`Edit doctor with ID: ${doctorId}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.doctors_id}>
              <td>{doctor.first_name}</td>
              <td>{doctor.last_name}</td>
              <td>{doctor.email}</td>
              <td>
                <button
                  onClick={(e) => {
                    console.log("Doctor object:", doctor);
                    handleDelete(e, doctor.doctor_id);
                  }}>
                  Delete
                </button>
                <button onClick={() => handleEdit(doctor.doctors_id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorsList;
