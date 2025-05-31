import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'sonner';
import axios from 'axios';
import { supabase } from '../supabaseClient';

interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  dateOfBirth: string;
  email?: string;
  placeOfBirth?: string;
}

interface NewPatientForm {
  firstName: string;
  lastName: string;
  age: number;
  dateOfBirth: string;
  medicalHistory: string;
  email: string;
  password: string;
}

const PatientList = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [userType, setUserType] = useState<"radiologue" | "doctor" | null>(null);
  const [newPatient, setNewPatient] = useState<NewPatientForm>({
    firstName: '',
    lastName: '',
    age: 0,
    dateOfBirth: '',
    medicalHistory: '',
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const navigate = useNavigate();
  const patientsPerPage = 8;

  useEffect(() => {
    const getUserType = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserType(user.user_metadata?.user_type || null);
      }
    };
    getUserType();
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get('http://localhost:3000/get_patients', {
        params: { _cache: Date.now() },
        timeout: 10000,
      });

      if (data.success) {
        setPatients(
          data.data.map((p: Patient) => ({
            ...p,
            dateOfBirth: formatDate(p.dateOfBirth),
          }))
        );
      } else {
        throw new Error(data.error || 'Failed to fetch patients');
      }
    } catch (error: any) {
      const message =
        axios.isAxiosError(error)
          ? error.response?.data?.error || error.message
          : error.message || 'An error occurred';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return isNaN(date.getTime()) ? dateStr : date.toISOString().split('T')[0];
  };

  const handlePatientClick = (id: string) => {
    if (userType === "radiologue") {
      navigate('/radiologue_interface', {
        state: { id, tab: 'add' },
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewPatient((prev) => ({ ...prev, [name]: value }));

    if (formErrors[name]) {
      setFormErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!newPatient.firstName.trim()) errors.firstName = 'First name is required';
    if (!newPatient.lastName.trim()) errors.lastName = 'Last name is required';
    if (newPatient.age <= 0) errors.age = 'Age must be greater than 0';
    if (!newPatient.dateOfBirth) errors.dateOfBirth = 'Date of birth is required';
    if (!newPatient.email.includes('@')) errors.email = 'Valid email is required';
    if (newPatient.password.length < 8) errors.password = 'Password must be at least 8 characters';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const res = await axios.post('http://localhost:3000/create_patient', newPatient, {
        timeout: 10000,
      });

      if (res.data) {
        toast.success('Patient created successfully');
        setNewPatient({
          firstName: '',
          lastName: '',
          age: 0,
          dateOfBirth: '',
          medicalHistory: '',
          email: '',
          password: '',
        });
        setIsModalOpen(false);
        await fetchPatients();
      }
    } catch (error: any) {
      const message =
        axios.isAxiosError(error)
          ? error.response?.data?.message || error.message
          : error.message || 'Error creating patient';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const filteredPatients = patients.filter((p) => {
    const search = searchTerm.toLowerCase();
    return (
      p.firstName.toLowerCase().includes(search) ||
      p.lastName.toLowerCase().includes(search) ||
      p.email?.toLowerCase().includes(search) ||
      p.placeOfBirth?.toLowerCase().includes(search)
    );
  });

  const totalPages = Math.ceil(filteredPatients.length / patientsPerPage);
  const currentPatients = filteredPatients.slice(
    (currentPage - 1) * patientsPerPage,
    currentPage * patientsPerPage
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <Toaster richColors position="top-center" />

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Patient Directory</h1>

          <button
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            onClick={() => setIsModalOpen(true)}
          >
            Add Patient
          </button>
        
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Create New Patient</h2>
              <button onClick={() => setIsModalOpen(false)}>
                <span className="text-gray-400 hover:text-black">&times;</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['firstName', 'lastName', 'age', 'dateOfBirth', 'email', 'password'].map((field) => (
                  <div key={field}>
                    <label className="block text-sm font-medium capitalize mb-1">
                      {field.replace(/([A-Z])/g, ' $1')}*
                    </label>
                    <input
                      type={field === 'dateOfBirth' ? 'date' : field === 'age' ? 'number' : field === 'password' ? 'password' : 'text'}
                      name={field}
                      value={(newPatient as any)[field]}
                      onChange={handleInputChange}
                      className={`w-full border rounded-lg p-2 ${
                        formErrors[field] ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {formErrors[field] && <p className="text-red-500 text-xs">{formErrors[field]}</p>}
                  </div>
                ))}

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">Medical History</label>
                  <textarea
                    name="medicalHistory"
                    value={newPatient.medicalHistory}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full border border-gray-300 p-2 rounded-lg"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-300"
                >
                  {loading ? 'Creating...' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <input
        type="text"
        placeholder="Search patients..."
        className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="bg-white rounded-lg shadow overflow-hidden">
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
            {loading ? (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center">
                  Loading...
                </td>
              </tr>
            ) : currentPatients.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center">
                  No patients found
                </td>
              </tr>
            ) : (
              currentPatients.map((patient) => (
                <tr
                  key={patient.id}
                  onClick={() => handlePatientClick(patient.id)}
                  className={`${
                    userType === "radiologue"
                      ? "cursor-pointer hover:bg-gray-50"
                      : "cursor-default"
                  }`}
                >
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">
                      {patient.firstName} {patient.lastName}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{patient.age}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{patient.dateOfBirth}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{patient.email || '-'}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded ${
                currentPage === page
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PatientList;
