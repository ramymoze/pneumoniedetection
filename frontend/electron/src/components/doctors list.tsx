import { useState } from 'react';
import { FaUserDoctor } from 'react-icons/fa6';

// --- Types ---
interface Doctor {
  id: string;
  name: string;
  specialty: string;
  icon: React.ReactNode;
}



// --- Main Component ---
const DoctorList: React.FC = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);

  const handleDoctorSelect = (doctorId: string): void => {
    setSelectedDoctor(doctorId);
    console.log(`Selected doctor: ${doctorId}`);
  };

  const doctors: Doctor[] = [
    { id: "dr_smith", name: "Dr. test1", specialty: "Cardiology", icon: <FaUserDoctor size={24} /> },
    { id: "dr_jones", name: "Dr. test2", specialty: "Neurology", icon: <FaUserDoctor size={24} /> },
    { id: "dr_williams", name: "Dr. test3", specialty: "Pediatrics", icon: <FaUserDoctor size={24} /> },
    { id: "ramy", name: "ramy", specialty: "Orthopedics", icon: <FaUserDoctor size={24} /> },
   
    
  ];

  return (
    <div className="flex h-screen w-full ">
      

      <div className="flex-1 p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Select Doctor </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              onClick={() => handleDoctorSelect(doctor.id)}
              className={`bg-white p-4 rounded-lg shadow-md cursor-pointer transition-all hover:shadow-lg ${
                selectedDoctor === doctor.id ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  {doctor.icon}
                </div>
                <h3 className="font-semibold text-lg">{doctor.name}</h3>
                <p className="text-gray-600 text-sm">{doctor.specialty}</p>
                <button
                  className="mt-3 px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm hover:bg-blue-200 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDoctorSelect(doctor.id);
                  }}
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default DoctorList;
