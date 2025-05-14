import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { FaUser, FaSearch, FaFilter } from 'react-icons/fa';

interface Doctor {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  specialty?: string;
  phone?: string;
  rating?: number;
}

interface ApiResponse {
  success: boolean;
  data: Doctor[];
  count: number;
  error?: string;
}

const API_BASE_URL = 'http://localhost:3000';

export default function DoctorList() {
  const [state, setState] = useState({
    doctors: [] as Doctor[],
    filteredDoctors: [] as Doctor[],
    selectedDoctorId: null as string | null,
    loading: true,
    error: null as string | null,
    totalDoctors: 0,
    searchTerm: '',
    filterSpecialty: ''
  });

  const fetchDoctors = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));

      const response = await axios.get<ApiResponse>(`${API_BASE_URL}/get_doctors`);
      
      if (!response.data.success || !Array.isArray(response.data.data)) {
        throw new Error(response.data.error || 'Invalid data format');
      }

      const doctorsWithDefaults = response.data.data.map(doctor => ({
        ...doctor,
        specialty: doctor.specialty || 'General Practitioner',
        rating: doctor.rating || 4.5
      }));

      setState(prev => ({
        ...prev,
        doctors: doctorsWithDefaults,
        filteredDoctors: doctorsWithDefaults,
        totalDoctors: response.data.count,
        loading: false
      }));

    } catch (error) {
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.error || error.message
        : (error as Error).message;

      setState(prev => ({
        ...prev,
        error: errorMessage,
        loading: false,
        doctors: [],
        filteredDoctors: [],
        totalDoctors: 0
      }));

      console.error('Error fetching doctors:', error);
    }
  }, []);

  useEffect(() => {
    fetchDoctors();
  }, [fetchDoctors]);

  useEffect(() => {
    const filtered = state.doctors.filter(doctor => {
      const matchesSearch = state.searchTerm === '' || 
        `${doctor.firstName} ${doctor.lastName}`.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        doctor.email.toLowerCase().includes(state.searchTerm.toLowerCase());

      const matchesSpecialty = state.filterSpecialty === '' || 
        doctor.specialty === state.filterSpecialty;

      return matchesSearch && matchesSpecialty;
    });

    setState(prev => ({ ...prev, filteredDoctors: filtered }));
  }, [state.doctors, state.searchTerm, state.filterSpecialty]);

  const handleDoctorSelect = (doctorId: string) => {
    setState(prev => ({
      ...prev,
      selectedDoctorId: prev.selectedDoctorId === doctorId ? null : doctorId
    }));
  };

  const specialties = [...new Set(state.doctors.map(d => d.specialty).filter(Boolean))] as string[];

  if (state.loading && state.doctors.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
        <p className="text-gray-600">Loading doctors...</p>
      </div>
    );
  }

  if (state.error && state.doctors.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen p-4">
        <div className="bg-red-50 text-red-700 p-6 rounded-lg shadow-md max-w-md text-center">
          <h2 className="text-xl font-semibold mb-2">Error Loading Doctors</h2>
          <p className="mb-4">{state.error}</p>
          <button
            onClick={fetchDoctors}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      
      <div className="bg-white shadow-sm p-4 border-b">
        <h1 className="text-2xl font-bold text-gray-800">Doctor's Liste</h1>
      </div>

      <div className="flex-1 p-6 overflow-y-auto">
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search doctors by name or email..."
                value={state.searchTerm}
                onChange={(e) => setState(prev => ({ ...prev, searchTerm: e.target.value }))}
                className="pl-10 pr-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={state.filterSpecialty}
                onChange={(e) => setState(prev => ({ ...prev, filterSpecialty: e.target.value }))}
                className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="">All Specialties</option>
                {specialties.map(specialty => (
                  <option key={specialty} value={specialty}>{specialty}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Available Doctors</h2>
          <span className="text-gray-600">
            Showing {state.filteredDoctors.length} of {state.totalDoctors} doctors
          </span>
        </div>

        {state.filteredDoctors.length === 0 ? (
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <FaSearch className="mx-auto text-gray-400 mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No doctors found</h3>
            <p className="text-gray-500 mb-4">
              {state.searchTerm || state.filterSpecialty 
                ? "Try adjusting your search or filters"
                : "No doctors available in the system"}
            </p>
            {(state.searchTerm || state.filterSpecialty) && (
              <button
                onClick={() => setState(prev => ({ 
                  ...prev, 
                  searchTerm: '', 
                  filterSpecialty: '' 
                }))}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {state.filteredDoctors.map(doctor => (
              <div
                key={doctor.id}
                onClick={() => handleDoctorSelect(doctor.id)}
                className={`bg-white p-5 rounded-lg shadow-md cursor-pointer transition-all hover:shadow-lg ${
                  state.selectedDoctorId === doctor.id ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                    <FaUser size={24} className="text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    {doctor.firstName} {doctor.lastName}
                  </h3>
                  {doctor.specialty && (
                    <p className="text-blue-600 font-medium text-sm mb-1">{doctor.specialty}</p>
                  )}
                  <p className="text-gray-500 text-sm mb-2">{doctor.email}</p>

                  <button
                    className={`mt-2 px-4 py-1.5 rounded-full text-sm transition-colors ${
                      state.selectedDoctorId === doctor.id
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDoctorSelect(doctor.id);
                    }}
                  >
                    {state.selectedDoctorId === doctor.id ? 'Selected' : 'select'}
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