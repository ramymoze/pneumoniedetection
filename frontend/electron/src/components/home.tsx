"use client"

import { useState, useEffect } from "react"
import { supabase } from "../supabaseClient"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Clock, Mail, Calendar, User, Activity, FileText, Bell, Settings, LogOut } from "lucide-react"

type UserType = {
  id: string
  email: string
  first_name: string
  last_name: string
  user_type: "radiologue" | "doctor"
  created_at: string
  avatar_url?: string
}

// Mock data for dashboard stats
const mockStats = {
  patientsReviewed: 128,
  reportsCompleted: 87,
  pendingReviews: 14,
  totalHours: 42,
}

// Mock data for recent activity
const mockActivity = [
  { id: 1, action: "Reviewed patient scan", patient: "John Doe", time: "2 hours ago", status: "completed" },
  { id: 2, action: "Updated medical report", patient: "Sarah Smith", time: "4 hours ago", status: "completed" },
  { id: 3, action: "Scheduled follow-up", patient: "Michael Johnson", time: "1 day ago", status: "pending" },
  { id: 4, action: "Requested second opinion", patient: "Emily Wilson", time: "2 days ago", status: "waiting" },
]

export default function DashboardProfile() {
  const [user, setUser] = useState<UserType | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [progress, setProgress] = useState(67)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession()

        if (error || !session) {
          throw error || new Error("No active session")
        }

        const {
          data: { user: supabaseUser },
        } = await supabase.auth.getUser()
        if (supabaseUser) {
          setUser({
            id: supabaseUser.id,
            email: supabaseUser.email || "",
            first_name: supabaseUser.user_metadata?.first_name || "",
            last_name: supabaseUser.user_metadata?.last_name || "",
            user_type: supabaseUser.user_metadata?.user_type || "radiologue",
            created_at: supabaseUser.created_at,
            avatar_url: supabaseUser.user_metadata?.avatar_url,
          })
        }
      } catch (error) {
        console.error("Error fetching user:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()

    // Update clock every second
    const clockInterval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(clockInterval)
  }, [])

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName[0] || ""}${lastName[0] || ""}`.toUpperCase()
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-blue-100 text-blue-800"
      case "waiting":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const signOut = async () => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signOut()
      if (error) throw error

      // Redirect to login page after successful sign out
      window.location.href = "/"
    } catch (error) {
      console.error("Error signing out:", error)
      alert("Error signing out. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
        <div className="w-full max-w-6xl grid gap-6">
          <Skeleton className="h-24 w-full rounded-lg" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Skeleton className="h-40 w-full rounded-lg" />
            <Skeleton className="h-40 w-full rounded-lg" />
            <Skeleton className="h-40 w-full rounded-lg" />
            <Skeleton className="h-40 w-full rounded-lg" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Skeleton className="h-80 w-full rounded-lg md:col-span-2" />
            <Skeleton className="h-80 w-full rounded-lg" />
          </div>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <CardTitle>Session Expired</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Please log in to view your dashboard</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => (window.location.href = "/login")}>
              Go to Login
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header with clock */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 border-2 border-blue-500">
              <AvatarImage src={user.avatar_url || "/placeholder.svg"} alt={`${user.first_name} ${user.last_name}`} />
              <AvatarFallback className="text-2xl font-semibold bg-blue-100 text-blue-700">
                {getInitials(user.first_name, user.last_name)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Welcome back, {user.first_name}!</h1>
              <p className="text-gray-500 flex items-center gap-1">
                <Badge className="capitalize bg-blue-500">{user.user_type}</Badge>
                <span className="text-sm ml-2">{user.email}</span>
              </p>
            </div>
          </div>

          {/* Clock Component */}
          <div className="flex flex-col items-center">
            <div className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md flex items-center gap-3 w-full md:w-auto">
              <Clock className="h-6 w-6 text-blue-300" />
              <div>
                <div className="text-2xl font-mono font-bold">
                  {currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
                </div>
                <div className="text-xs text-gray-300">
                  {currentTime.toLocaleDateString([], {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <Card className="border-t-4 border-blue-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Patients Reviewed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">{mockStats.patientsReviewed}</div>
              <p className="text-xs text-gray-500 mt-1">+12% from last month</p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-green-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Reports Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{mockStats.reportsCompleted}</div>
              <p className="text-xs text-gray-500 mt-1">+5% from last month</p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-red-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Pending Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600">{mockStats.pendingReviews}</div>
              <p className="text-xs text-gray-500 mt-1">-3% from last month</p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-gray-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-700">{mockStats.totalHours}</div>
              <p className="text-xs text-gray-500 mt-1">This month</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Activity Feed and Tasks - Takes 2/3 of the width on large screens */}
          <Card className="lg:col-span-2">
            <Tabs defaultValue="activity">
              <CardHeader className="pb-0">
                <div className="flex items-center justify-between">
                  <CardTitle>Dashboard Overview</CardTitle>
                  <TabsList>
                    <TabsTrigger value="activity">Activity</TabsTrigger>
                    <TabsTrigger value="tasks">Tasks</TabsTrigger>
                    <TabsTrigger value="reports">Reports</TabsTrigger>
                  </TabsList>
                </div>
                <CardDescription>Monitor your recent activities and pending tasks</CardDescription>
              </CardHeader>

              <CardContent className="pt-6">
                <TabsContent value="activity" className="m-0">
                  <div className="space-y-5">
                    {mockActivity.map((item) => (
                      <div key={item.id} className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0">
                        <div
                          className={`p-2 rounded-full ${
                            item.status === "completed"
                              ? "bg-green-100"
                              : item.status === "pending"
                                ? "bg-blue-100"
                                : "bg-red-100"
                          }`}
                        >
                          <Activity
                            className={`h-5 w-5 ${
                              item.status === "completed"
                                ? "text-green-600"
                                : item.status === "pending"
                                  ? "text-blue-600"
                                  : "text-red-600"
                            }`}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h4 className="font-medium text-gray-900">{item.action}</h4>
                            <span className="text-xs text-gray-500">{item.time}</span>
                          </div>
                          <p className="text-sm text-gray-600">Patient: {item.patient}</p>
                          <Badge className={`mt-2 ${getStatusColor(item.status)}`}>{item.status}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="tasks" className="m-0">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Weekly Progress</span>
                        <span className="text-blue-600">{progress}%</span>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-blue-600" />
                        <div className="flex-1">
                          <p className="font-medium">Review MRI scans for patient #1082</p>
                          <p className="text-sm text-gray-500">Due today</p>
                        </div>
                        <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Urgent</Badge>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-blue-600" />
                        <div className="flex-1">
                          <p className="font-medium">Complete weekly report</p>
                          <p className="text-sm text-gray-500">Due in 2 days</p>
                        </div>
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Medium</Badge>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-blue-600" />
                        <div className="flex-1">
                          <p className="font-medium">Team meeting</p>
                          <p className="text-sm text-gray-500">Tomorrow, 10:00 AM</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Low</Badge>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="reports" className="m-0">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Monthly Reports</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">24</div>
                          <p className="text-xs text-gray-500">Reports generated this month</p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Pending Approvals</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">7</div>
                          <p className="text-xs text-gray-500">Reports awaiting approval</p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="flex justify-center">
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <FileText className="mr-2 h-4 w-4" />
                        Generate New Report
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </CardContent>
            </Tabs>
          </Card>

          {/* Profile and Quick Actions - Takes 1/3 of the width on large screens */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col items-center space-y-3 pb-4 border-b border-gray-100">
                  <Avatar className="h-24 w-24 border-4 border-blue-100">
                    <AvatarImage
                      src={user.avatar_url || "/placeholder.svg"}
                      alt={`${user.first_name} ${user.last_name}`}
                    />
                    <AvatarFallback className="text-3xl font-semibold bg-blue-100 text-blue-700">
                      {getInitials(user.first_name, user.last_name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h3 className="text-xl font-bold">
                      {user.first_name} {user.last_name}
                    </h3>
                    <p className="text-sm text-gray-500 capitalize">{user.user_type}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <span className="text-sm">{user.email}</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <span className="text-sm">
                      Member since{" "}
                      {new Date(user.created_at).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-gray-400" />
                    <span className="text-sm">ID: {user.id.substring(0, 8)}...</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Edit Profile
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                  onClick={signOut}
                  disabled={loading}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  {loading ? "Signing out..." : "Sign Out"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

     
    </div>
  </div>
  )
}
