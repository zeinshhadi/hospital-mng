import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DoctorsInfo = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .post(`http://localhost/hospital-mng/backend/appointments/get_doctor_app.php`, {
        doctor_id: id,
      })
      .then(function (res) {
        console.log(res.data);
        setAppointments(res.data);
      })
      .catch(function (error) {
        console.error("Error fetching appointments:", error);
      });
  }, [id]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Doctor Name</th>
            <th>Appointment Date</th>
          </tr>
        </thead>
        <tbody>
          {appointments &&
            appointments.map((appointment, index) => (
              <tr key={index}>
                <td>{appointment.patient_name}</td>
                <td>{appointment.doctor_name}</td>
                <td>{appointment.appointment_date}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorsInfo;
