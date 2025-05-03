import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUserDoctor } from 'react-icons/fa6';

// --- Types ---
interface Doctor {
  id: string;
  name: string;
  specialty: string;
  icon?: React.ReactNode;
}

// --- Main Component ---
const DoctorList: React.FC = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('/get_doctors');
        
        // Ensure response.data exists and is an array
        if (!response.data || !Array.isArray(response.data)) {
          throw new Error('Invalid data format received from server');
        }

        // Add icons to each doctor
        const doctorsWithIcons = response.data.map((doctor: Doctor) => ({
          ...doctor,
          icon: <FaUserDoctor size={24} />
        }));
        setDoctors(doctorsWithIcons);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch doctors');
        console.error('Error fetching doctors:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const handleDoctorSelect = (doctorId: string): void => {
    setSelectedDoctor(doctorId);
  };

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <p>Loading doctors...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full">
      <div className="flex-1 p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Select Doctor</h2>
        {doctors.length === 0 ? (
          <p>No doctors available</p>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default DoctorList;