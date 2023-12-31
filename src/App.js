import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CreateUser from "./components/patients/create_user/CreateUser";
import LogIn from "./components/patients/login";
import LogInDoctor from "./components/Doctors/login_doctor/LogInDoctor";
import LogInAdmin from "./components/admin/login/LogInAdmin";
import PatientsInfo from "./components/patients/patients_info/PatientsInfo";

import Landing from "./components/landing/Landing";
import CreateDoctor from "./components/Doctors/add_doctor/index";
import DoctorsInfo from "./components/Doctors/doctors_info/DoctorsInfo";
import AdminInfo from "./components/admin/admin_info/AdminInfo";
import CreateApp from "./components/patients/appointment/CreateApp";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/login/doctor" element={<LogInDoctor />} />
          <Route path="/login/admin" element={<LogInAdmin />} />
          <Route path="user/create" element={<CreateUser />} />
          <Route path="/doctor/create" element={<CreateDoctor />} />
          <Route path="/:id/patient/Info" element={<PatientsInfo />} />
          <Route path="/:id/doctor/info" element={<DoctorsInfo />} />
          <Route path="/admin/info" element={<AdminInfo />} />
          <Route path="/:id/appointment" element={<CreateApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
