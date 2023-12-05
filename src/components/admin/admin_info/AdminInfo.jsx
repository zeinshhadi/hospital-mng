import React from "react";
import GetPatients from "../../patients/get_patients";
import DoctorsList from "../DoctorsList";
const AdminInfo = () => {
  return (
    <div>
      <GetPatients />
      <DoctorsList />
    </div>
  );
};

export default AdminInfo;
