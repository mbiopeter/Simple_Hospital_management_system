import './App.css';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import { useState } from 'react';
import Employees from './pages/Employees/Employees';
import NewEmployee from './pages/Employees/New/New';
import Patients from './pages/Patients/Patients';
import NewPatient from './pages/Patients/New/New';
import Appointments from './pages/Appointments/Appointments';
import Schedule from './pages/Schedule/Schedule';
import Treatments from './pages/Treatment/Treatment';
import NewTreatment from './pages/Treatment/New/New';
import Daily from './pages/Reports/Daily';
import Monthly from './pages/Reports/Monthly';
import Annual from './pages/Reports/Annual';
function App() {
  const [minimize, setMinimize] = useState(false);
  const [MobileMinimize, setMobileMinimize] = useState();
  const handleMinize = () => {
    setMinimize(!minimize)
  }
  const handleMobileMinize = () => {
    if (MobileMinimize) {
      setMobileMinimize(false);
    }
    else {
      setMobileMinimize(true);
    }
  }
  console.log(MobileMinimize);
  return (
    <div className="app">
      <BrowserRouter>
        <SideBar minimize={minimize} MobileMinimize={MobileMinimize} />
        <div className="app-container" style={minimize ? { width: '95%', transition: '0.3s linear' } : { width: '85%', transition: '0.3s linear' }}>
          <NavBar handleMinize={handleMinize} minimize={minimize} handleMobileMinize={handleMobileMinize} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/employees/new" element={<NewEmployee />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/patients/new" element={<NewPatient />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/treatment" element={<Treatments />} />
            <Route path="/treatment/New" element={<NewTreatment />} />
            <Route path="/repots/daily" element={<Daily />} />
            <Route path="/repots/monthly" element={<Monthly />} />
            <Route path="/repots/annual" element={<Annual />} />
          </Routes>

        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
