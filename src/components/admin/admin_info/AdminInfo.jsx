import React from "react";
import GetPatients from "../../patients/get_patients";
import DoctorsList from "../DoctorsList";
import PatientsList from "../PatientsList";
const AdminInfo = () => {
  return (
    <div>
      <PatientsList />
      <DoctorsList />
    </div>
  );
};

export default AdminInfo;
