import React, { useEffect, useState } from "react";
import axios from "axios";

const GetPatients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get("http://localhost/hospital-mng/backend/patients/get_patients.php").then(function (res) {
      setPatients(res.data);
    });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.patients_id}>
              <td>{patient.first_name}</td>
              <td>{patient.last_name}</td>
              <td>{patient.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetPatients;
