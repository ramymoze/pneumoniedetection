import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import Radiologue_interface from './pages/radiologue';
import Doctor_interface from './pages/doctor';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/radiologue_interface" element={<Radiologue_interface  />} />
        <Route path="/doctor_interface" element={<Doctor_interface />} />
      </Routes>
    </Router>
  );
}

export default App;