import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const PatientsInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="link"
        onClick={() => {
          navigate(`/${id}/appointment`);
        }}>
        Create Appointment
      </button>
    </div>
  );
};

export default PatientsInfo;
