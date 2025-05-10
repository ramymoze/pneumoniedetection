import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import axios from 'axios';
interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  dateOfBirth: string;
  email?: string;
  placeOfBirth?: string;
}

const PatientList = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const patientsPerPage = 8;
  const navigate = useNavigate();
useEffect(() => {
  const fetchPatients = async () => {
    try {
      const { data } = await axios.get<{
        success: boolean;
        data: Patient[];
        error?: string;
      }>('http://localhost:3000/get_patients', {
        params: {
          _cache: Date.now() // Avoid caching
        },
        timeout: 10000 // 10 second timeout
      });
      
      if (data.success) {
        setPatients(data.data.map(patient => ({
          ...patient,
          dateOfBirth: formatDate(patient.dateOfBirth) // Format dates consistently
        })));
      } else {
        throw new Error(data.error || 'Failed to fetch patients');
      }
    } catch (error) {
      let errorMessage = 'An unexpected error occurred';
      
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.error || 
                       error.message || 
                       'Network error fetching patients';
        
        // Handle specific status codes
        if (error.response?.status === 404) {
          errorMessage = 'Patients endpoint not found';
        } else if (error.response?.status === 401) {
          errorMessage = 'Unauthorized - please login again';
          // Optionally redirect to login
        }
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      toast.error(errorMessage);
      console.error('Patient fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Add cancellation
  const controller = new AbortController();
  
  fetchPatients();
  
  return () => controller.abort(); // Cleanup on unmount
}, []);

const formatDate = (dateString: string | Date): string => {
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? String(dateString) : date.toISOString().split('T')[0];
};

  const handlePatientClick = (patientId: string) => {
    navigate(`/patient/${patientId}`);
  };

  const filteredPatients = patients.filter(patient => {
    const searchLower = searchTerm.toLowerCase();
    return (
      patient.firstName.toLowerCase().includes(searchLower) ||
      patient.lastName.toLowerCase().includes(searchLower) ||
      patient.email?.toLowerCase().includes(searchLower) ||
      patient.placeOfBirth?.toLowerCase().includes(searchLower)
    );
  });

  // Pagination calculations
  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = filteredPatients.slice(indexOfFirstPatient, indexOfLastPatient);
  const totalPages = Math.ceil(filteredPatients.length / patientsPerPage);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Toaster position="top-center" />
      
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Patient Directory</h1>
        <button 
          onClick={() => navigate('/patient/new')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Add New Patient
        </button>
      </header>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search patients..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredPatients.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">No patients found</h2>
          <p className="text-gray-500">
            {searchTerm ? 'Try adjusting your search' : 'Add a new patient to get started'}
          </p>
        </div>
      ) : (
        <>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date of Birth</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentPatients.map((patient) => (
                  <tr 
                    key={patient.id}
                    onClick={() => handlePatientClick(patient.id)}
                    className="hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">
                        {patient.firstName} {patient.lastName}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">{patient.age}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                      {new Date(patient.dateOfBirth).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">{patient.email || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {totalPages > 1 && (
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg ${currentPage === 1 ? 'bg-gray-200 text-gray-500' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
              >
                Previous
              </button>
              
              <span className="text-gray-700">
                Page {currentPage} of {totalPages}
              </span>
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg ${currentPage === totalPages ? 'bg-gray-200 text-gray-500' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PatientList;