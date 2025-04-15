import "./index.css";
import Navbar from "./components/navebar";
import Patientliste from "./components/patients_liste";
import Home from "./components/home";
import ImageUploadCard from "./components/upload";
import Patieninfo_add from "./components/patientinfo_add";
import DoctorList from "./components/doctors list";
import { useState } from "react";
function App() {
  const [isOpen, setIsOpen] = useState("home");
  return (
    <>
      <div className="flex flex-row h-screen bg-[#e6e6e6] z-10  sticky top-0">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        {isOpen === "home" && (
          <>
            <div className="fle">
              <Home />
            </div>
          </>
        )}
        {isOpen === "chat" && (
          <>
            <div className="flex flex-col items-center justify-center w-full h-full">
              <h1 className="text-black text-3xl">chat page</h1>
            </div>
          </>
        )}
        {isOpen === "patients" && (
          <>
            <div className="flex flex-col h-screen w-screen bg-[#e6e6e6] ">
              <div className="flex flex-row items-center justify-between p-4 w-full h-16 ">
                <h1 className="text-xl font-semibold text-gray-800">
                  Patients Liste
                </h1>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  New Patient
                </button>
              </div>
              <div className="flex-1 overflow-auto p-4">
                <Patientliste />
              </div>
            </div>
          </>
        )}
        {isOpen === "settings" && (
          <>
            <div className="flex flex-col items-center justify-center w-full h-full">
              <h1 className="text-black text-3xl">settings page</h1>
            </div>
          </>
        )}
        {isOpen === "add" && (
        <div className="relative flex-1 flex flex-col bg-gray-100">
          <div className="flex flex-col space-y-16 px-4 py-6 w-[60rem]">
            <div className="flex justify-center mt-12">
              <ImageUploadCard />
            </div>
            <div className="w-full">
              <DoctorList />
            </div>
          </div>

          <div className="fixed inset-y-0 right-0 w-96 bg-white shadow-lg rounded-l-3xl overflow-hidden z-20">
            <Patieninfo_add />
          </div>
        </div>
      )}
      </div>
    </>
  );
}

export default App;
