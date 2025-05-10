import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner';

interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  dateOfBirth: string;
  placeOfBirth?: string;
  medicalHistory?: string;
  lastVisit?: string;
}

interface DetailCardProps {
  title: string;
  children: React.ReactNode;
}

interface DetailItemProps {
  label: string;
  value: string | number | null | undefined;
}

const DetailCard = ({ title, children }: DetailCardProps) => (
  <div className="bg-gray-50 p-6 rounded-lg">
    <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
    <div className="space-y-3">
      {children}
    </div>
  </div>
);

const DetailItem = ({ label, value }: DetailItemProps) => (
  <div className="flex justify-between">
    <span className="text-sm font-medium text-gray-500">{label}</span>
    <span className="text-sm text-gray-900">{value ?? 'Not specified'}</span>
  </div>
);

const PatientDetails = () => {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        if (!id) {
          throw new Error('Patient ID is missing');
        }

        const response = await fetch(`http://localhost:3000/api/patients/${id}`);
        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        if (data.success) {
          setPatient(data.data);
        } else {
          throw new Error(data.error || 'Patient not found');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load patient details');
      } finally {
        setLoading(false);
      }
    };

    fetchPatient();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => navigate('/')}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Back to Patient List
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Toaster position="top-center" />
      
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Patient Details</h1>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Back to List
        </button>
      </header>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-8">
          <div className="flex flex-col items-center mb-8">
            <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">
              {patient?.firstName} {patient?.lastName}
            </h2>
            <p className="text-blue-600">{patient?.email}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DetailCard title="Personal Information">
              <DetailItem label="First Name" value={patient?.firstName} />
              <DetailItem label="Last Name" value={patient?.lastName} />
              <DetailItem label="Age" value={patient?.age} />
              <DetailItem 
                label="Date of Birth" 
                value={patient?.dateOfBirth ? new Date(patient.dateOfBirth).toLocaleDateString() : undefined} 
              />
              <DetailItem label="Place of Birth" value={patient?.placeOfBirth} />
            </DetailCard>

            <DetailCard title="Medical Information">
              <DetailItem label="Medical History" value={patient?.medicalHistory} />
              <DetailItem 
                label="Last Visit" 
                value={patient?.lastVisit ? new Date(patient.lastVisit).toLocaleDateString() : undefined} 
              />
            </DetailCard>
          </div>

          <div className="mt-8 flex space-x-4">
            <button
              onClick={() => navigate(`/patient/edit/${patient?.id}`)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Edit Patient
            </button>
            <button
              onClick={() => navigate(`/patient/records/${patient?.id}`)}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              View Medical Records
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;