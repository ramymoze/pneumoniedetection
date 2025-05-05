import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUserDoctor } from 'react-icons/fa6';
import { Toaster, toast } from 'sonner';

interface Doctor {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  icon?: JSX.Element;
}

interface ApiResponse {
  success: boolean;
  data: Doctor[];
  count: number;
  error?: string;
}

function DoctorList() {
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalDoctors, setTotalDoctors] = useState<number>(0);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        const response = await axios.get<ApiResponse>('http://localhost:3000/get_doctors');

        console.log('Raw response from /get_doctors:', response);
        console.log('Response data:', response.data);

        if (typeof response.data !== 'object' || response.data === null) {
          throw new Error('Invalid response format');
        }

        if (!response.data.success || !Array.isArray(response.data.data)) {
          const errorMessage = response.data.error || 'Invalid data format received';
          throw new Error(errorMessage);
        }

        const doctorsWithIcons = response.data.data.map((doctor: Doctor) => ({
          ...doctor,
          icon: <FaUserDoctor size={24} />
        }));

        setDoctors(doctorsWithIcons);
        setTotalDoctors(response.data.count);
        toast.success(`Loaded ${response.data.count} doctors`);
      } catch (err) {
        const error = err as Error;
        let errorMessage = error.message;

        if (axios.isAxiosError(error)) {
          errorMessage = error.response?.data?.error || error.message;
        }

        toast.error(errorMessage);
        console.error('Error fetching doctors:', error);
        setDoctors([]);
        setTotalDoctors(0);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const handleDoctorSelect = (doctorId: string) => {
    setSelectedDoctor(doctorId === selectedDoctor ? null : doctorId);
  };

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <p>Loading doctors...</p>
        <Toaster position="top-right" richColors />
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full">
      <Toaster position="top-right" richColors />
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Select Doctor</h2>
          <span className="text-gray-600">{totalDoctors} doctors available</span>
        </div>

        {doctors.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">No doctors found</p>
          </div>
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
                  <h3 className="font-semibold text-lg">
                    {doctor.firstName} {doctor.lastName}
                  </h3>
                  <p className="text-gray-600 text-sm">{doctor.email}</p>
                  <button
                    className="mt-3 px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm hover:bg-blue-200 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDoctorSelect(doctor.id);
                    }}
                  >
                    {selectedDoctor === doctor.id ? 'Hide Profile' : 'View Profile'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DoctorList;
