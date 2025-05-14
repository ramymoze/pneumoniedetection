import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import axios from "axios"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import {

  ArrowLeft,

  User,
  Mail,
  Calendar,

  Activity,
} from "lucide-react"

interface Patient {
  id: string
  firstName: string
  lastName: string
  email: string
  age: number
  dateOfBirth: string
  medicalHistory?: string
  lastVisit?: string
}

type Props = {
  patientId: string | null
}

const PatientDetails = ({ patientId }: Props) => {
  const [patient, setPatient] = useState<Patient | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (!patientId) return

    const fetchPatient = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await axios.get(`http://localhost:3000/patients/${patientId}`)

        if (response.data.success) {
          setPatient(response.data.data)
        } else {
          throw new Error(response.data.error || "Failed to load patient")
        }
      } catch (err) {
        const msg =
          axios.isAxiosError(err) && err.response?.data?.error
            ? err.response.data.error
            : err instanceof Error
              ? err.message
              : "Failed to load patient details"
        setError(msg)
        toast.error(msg)
      } finally {
        setLoading(false)
      }
    }

    fetchPatient()
  }, [patientId])

  if (!patientId) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-slate-50 to-white">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-10 h-10 text-primary" />
            </div>
            <CardTitle className="text-2xl">No Patient Selected</CardTitle>
            <CardDescription>Please select a patient from the list to view details</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button
              onClick={() => navigate("/radiologue_interface", { state: { tab: "patients" } })}
              className="w-full"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Patient List
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex items-center space-x-4 mb-6">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-[180px]" />
            </CardHeader>
            <CardContent className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex justify-between">
                  <Skeleton className="h-4 w-[100px]" />
                  <Skeleton className="h-4 w-[150px]" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-[180px]" />
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-20 w-full" />
              <div className="flex justify-between">
                <Skeleton className="h-4 w-[100px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <div className="flex items-center">
              <div className="mr-4 p-2 bg-red-100 rounded-full">
                <Activity className="h-6 w-6 text-red-600" />
              </div>
              <CardTitle className="text-red-800">Error loading patient</CardTitle>
            </div>
            <CardDescription className="text-red-700">{error}</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button onClick={() => navigate("/radiologue_interface", { state: { tab: "patients" } })} variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Patient List
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <User className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Patient Details</h1>
          </div>
        </div>
        <div className="flex space-x-3">
          <Button
            onClick={() => navigate("/radiologue_interface", { state: { tab: "patients" } })}
            className="bg-blue-700 text-white hover:bg-blue-500 hover:text-white"
            variant="outline"
            size="sm"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>
      </div>

      <Card className="mb-8 overflow-hidden border-none shadow-md ">
        <div className="bg-gradient-to-r from-blue-700 to-blue-700/80 p-6 text-white rounded-2xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
              <User className="w-12 h-12" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold">
                {patient?.firstName} {patient?.lastName}
              </h2>
              <div className="flex items-center justify-center md:justify-start mt-2">
                <Mail className="w-4 h-4 mr-2" />
                <span>{patient?.email}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="personal">Personal Information</TabsTrigger>
          <TabsTrigger value="medical">Medical Information</TabsTrigger>
        </TabsList>

        <TabsContent value="personal">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <User className="mr-2 h-5 w-5 text-muted-foreground" />
                Personal Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                <div className="space-y-1">
                  <dt className="text-sm font-medium text-muted-foreground">First Name</dt>
                  <dd className="text-base font-semibold">{patient?.firstName ?? "—"}</dd>
                </div>
                <div className="space-y-1">
                  <dt className="text-sm font-medium text-muted-foreground">Last Name</dt>
                  <dd className="text-base font-semibold">{patient?.lastName ?? "—"}</dd>
                </div>
                <div className="space-y-1">
                  <dt className="text-sm font-medium text-muted-foreground">Age</dt>
                  <dd className="text-base font-semibold">{patient?.age ?? "—"}</dd>
                </div>
                <div className="space-y-1">
                  <dt className="text-sm font-medium text-muted-foreground">Date of Birth</dt>
                  <dd className="text-base font-semibold flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                    {patient?.dateOfBirth ? new Date(patient.dateOfBirth).toLocaleDateString() : "—"}
                  </dd>
                </div>
               
              </dl>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="medical">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Activity className="mr-2 h-5 w-5 text-muted-foreground" />
                Medical History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">Medical History</h4>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    {patient?.medicalHistory ? (
                      <p className="whitespace-pre-line">{patient.medicalHistory}</p>
                    ) : (
                      <p className="text-muted-foreground italic">No medical history recorded</p>
                    )}
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      
  
      </div>
    </div>
  )
}

export default PatientDetails
