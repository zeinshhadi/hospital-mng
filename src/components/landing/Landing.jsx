import React from "react";
import "./landing.css";
const Landing = () => {
  return (
    <div className="container d-flex d-spacearound">
      <div className="card d-flex d-spacearound d-direction">
        <div className="role">Patient</div>
        <div className="login">
          <a href={"/login"}>Log IN</a>
        </div>
      </div>
      <div className="card d-flex d-spacearound d-direction">
        <div className="role">Doctor</div>
        <div className="login">
          <a href={"/login/doctor"}>Log IN</a>
        </div>
      </div>
      <div className="card d-flex d-spacearound d-direction">
        <div className="role">Admin</div>
        <div className="login">
          <a href={"/login/admin"}>Log IN</a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
