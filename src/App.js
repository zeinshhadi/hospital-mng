import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CreateUser from "./components/create_user/CreateUser";
import LogIn from "./components/login";
import PatientsInfo from "./components/patients_info/PatientsInfo";
import CreateDoctor from "./components/add_doctor";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Log In</Link>
            </li>
            <li>
              <Link to="user/create">Create Patients</Link>
            </li>
          </ul>
        </nav> */}

        <Routes>
          <Route index element={<LogIn />} />
          <Route path="user/create" element={<CreateDoctor />} />
          <Route path="patient/Info" element={<PatientsInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
