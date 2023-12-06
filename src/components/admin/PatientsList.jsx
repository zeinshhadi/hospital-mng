import React, { useEffect, useState } from "react";
import axios from "axios";

const PatientsList = () => {
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost/hospital-mng/backend/patients/get_patients.php")
      .then(function (res) {
        setPatients(res.data);
      })
      .catch(function (error) {
        setError(error);
      });
  }, []);

  const handleDelete = async (event, patientId) => {
    event.preventDefault();

    if (!patientId) {
      console.error("Invalid patientId");
      return;
    }

    try {
      console.log("Deleting patient with ID:", patientId);
      const response = await axios.delete("http://localhost/hospital-mng/backend/admin/delete_patient.php", {
        data: { id: patientId },
        headers: { "Content-Type": "application/json" },
      });

      console.log("Response from server:", response.data);
      console.log("Patient deleted successfully");
      setPatients(patients.filter((patient) => patient.patients_id !== patientId));
    } catch (error) {
      console.error("Error deleting patient", error);
    }
  };

  const handleEdit = (patientId) => {
    console.log(`Edit patient with ID: ${patientId}`);
  };

  if (error) {
    return <p>{error.message}</p>;
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
          {patients.map((patient) => (
            <tr key={patient.patients_id}>
              <td>{patient.first_name}</td>
              <td>{patient.last_name}</td>
              <td>{patient.email}</td>
              <td>
                <button
                  onClick={(e) => {
                    handleDelete(e, patient.patients_id);
                  }}>
                  Delete
                </button>
                <button onClick={() => handleEdit(patient.patients_id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientsList;
