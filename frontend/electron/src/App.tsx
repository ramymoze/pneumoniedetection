import {BrowserRouter,Routes,Route} from "react-router-dom"
import Radiologue_interface from "./pages/radiologue";
import Doctor_interface from "./pages/doctor";
import Log_in from "./pages/login-page";
import "./index.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Log_in />} />
        <Route path="/radiologue_interface" element={<Radiologue_interface />} />
        <Route path="/doctor_interface" element={<Doctor_interface />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;