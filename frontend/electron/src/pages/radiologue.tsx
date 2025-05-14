import Navbar from "../components/navebar"
import Patientliste from "../components/patients_liste"
import Home from "../components/home"
import ImageUploadCard from "../components/upload"
import Patientinfo_add from "../components/patientinfo_add"
import DoctorList from "../components/doctors list"
import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"

export default function Radiologue_interface() {
  const navigate = useNavigate()
  const location = useLocation()

  // Get tab from navigation state (if passed)
  const state = location.state as { tab?: string; id?: string }
  const initialTab = state?.tab || "home"

  const patientId = state?.id || null

  const [isOpen, setIsOpen] = useState(initialTab)

  useEffect(() => {
    if (state?.tab) {
      setIsOpen(state.tab)
    }
  }, [state?.tab])

  // Update URL query param when tab changes (but keep clean URL if home)
  useEffect(() => {
    // Only navigate if the tab is different from what's in the URL
    const searchParams = new URLSearchParams(window.location.search)
    const currentTabParam = searchParams.get("tab")

    if (isOpen === "home" && currentTabParam !== null) {
      navigate("", {
        replace: true,
        state: location.state,
      })
    } else if (isOpen !== "home" && currentTabParam !== isOpen) {
      navigate(`?tab=${isOpen}`, {
        replace: true,
        state: location.state,
      })
    }
  }, [isOpen, navigate, location.state])

  return (
    <div className="flex h-screen overflow-hidden bg-[#e6e6e6]">
      {/* Fixed navbar that stays visible when scrolling */}
      <div className="fixed h-full z-30">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {/* Content area with left padding to accommodate the navbar */}
      <div className="flex-1 overflow-auto ml-[calc(var(--navbar-width,80px)+0.5rem)]">
        {isOpen === "home" && (
          <div className="h-full pl-6">
            <Home />
          </div>
        )}

        {isOpen === "radio sent" && (
          <div className="flex flex-col items-center justify-center w-full h-full pl-6">
            <h1 className="text-black text-3xl">radio sent page</h1>
          </div>
        )}

        {isOpen === "patients" && (
          <div className="flex flex-col h-full w-full bg-[#e6e6e6] pl-6">
            <div className="flex flex-row items-center justify-between p-4 w-full h-16">
              <h1 className="text-xl font-semibold text-gray-800">Patients Liste</h1>
            </div>
            <div className="flex-1 overflow-auto p-4">
              <Patientliste />
            </div>
          </div>
        )}

        {isOpen === "add" && (
          <div className="relative flex-1 flex flex-col bg-gray-100 min-h-screen pl-6">
            <div className="flex flex-col space-y-16 px-4 py-6 w-[60rem]">
              <div className="flex justify-center mt-12">
                <ImageUploadCard />
              </div>
              <div className="w-full">
                <DoctorList />
              </div>
            </div>
            <div className="fixed inset-y-0 right-0 w-96 bg-white shadow-lg rounded-l-3xl overflow-hidden z-20">
              <Patientinfo_add patientId={patientId} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
