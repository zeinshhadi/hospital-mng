import React from "react";

const Landing = () => {
  return (
    <div className="container d-flex d-spacearound">
      <div className="card">
        <div className="role">Patient</div>
        <div className="login">
          <a href={"/login"}>Log IN</a>
        </div>
      </div>
      <div className="card">
        <div className="role">Doctor</div>
        <div className="login">
          <a href={"/login/doctor"}>Log IN</a>
        </div>
      </div>
      <div className="card">
        <div className="role">Admin</div>
        <div className="login">
          <a href={"/login/admin"}>Log IN</a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
