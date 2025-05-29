import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Clock, Mail, Calendar, User, Activity, 
  Bell, LogOut, Trash, 
  CheckCircle, PlusCircle, XCircle, Building 
} from "lucide-react";
import { Input } from "@/components/ui/input";
import axios from "axios";

// Custom scrollbar styles
const scrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #c5c5c5;
    border-radius: 10px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
`;

type UserType = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  user_type: "radiologue" | "doctor";
  created_at: string;
  avatar_url?: string;
};

type Task = {
  id: number;
  text: string;
  dueDate: string;
  priority: "Low" | "Medium" | "Urgent";
  completed: boolean;
};

type ActivityItem = {
  id: number;
  action: string;
  subject?: string;
  time: string;
  status: "completed" | "pending" | "waiting" | "added" | "deleted";
  taskId?: number;
  timestamp: number;
};

export default function DashboardProfile() {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [progress, setProgress] = useState(0);
  const [tasks, setTasks] = useState<Task[]>(() => {
    // Load tasks from localStorage on initial render
    const savedTasks = localStorage.getItem('userTasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTask, setNewTask] = useState("");
  const [newTaskPriority, setNewTaskPriority] = useState<"Low" | "Medium" | "Urgent">("Medium");
  const [activityLog, setActivityLog] = useState<ActivityItem[]>([]);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    if (tasks) {
      localStorage.setItem('userTasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  // Calculate progress whenever tasks change
  useEffect(() => {
    if (tasks.length === 0) {
      setProgress(0);
      return;
    }

    const completedTasks = tasks.filter((task) => task.completed).length;
    const progressPercentage = Math.round((completedTasks / tasks.length) * 100);
    setProgress(progressPercentage);

    // Add progress update to activity log
    if (tasks.length > 0) {
      const lastActivityId = activityLog.length > 0 ? Math.max(...activityLog.map((a) => a.id)) : 0;
      setActivityLog((prev) => [
        {
          id: lastActivityId + 1,
          action: `Today's progress updated to ${progressPercentage}%`,
          time: "Just now",
          status: "completed",
          timestamp: Date.now(),
        },
        ...prev.filter((a) => !a.action.includes("Today's progress updated")),
      ]);
    }
  }, [tasks]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();

        if (error || !session) {
          throw error || new Error("No active session");
        }

        const { data: { user: supabaseUser } } = await supabase.auth.getUser();
        if (supabaseUser) {
          setUser({
            id: supabaseUser.id,
            email: supabaseUser.email || "",
            first_name: supabaseUser.user_metadata?.first_name || "",
            last_name: supabaseUser.user_metadata?.last_name || "",
            user_type: supabaseUser.user_metadata?.user_type || "radiologue",
            created_at: supabaseUser.created_at,
            avatar_url: supabaseUser.user_metadata?.avatar_url,
          });
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();

    // Update clock every second
    const clockInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(clockInterval);
  }, []);

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName[0] || ""}${lastName[0] || ""}`.toUpperCase();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800";
      case "pending": return "bg-blue-100 text-blue-800";
      case "waiting": return "bg-red-100 text-red-800";
      case "added": return "bg-purple-100 text-purple-800";
      case "deleted": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "pending": return <Activity className="h-5 w-5 text-blue-600" />;
      case "waiting": return <Clock className="h-5 w-5 text-red-600" />;
      case "added": return <PlusCircle className="h-5 w-5 text-purple-600" />;
      case "deleted": return <XCircle className="h-5 w-5 text-orange-600" />;
      default: return <Activity className="h-5 w-5 text-gray-600" />;
    }
  };

  const addTask = () => {
    if (newTask.trim() === "") return;

    const newTaskObj: Task = {
      id: Date.now(),
      text: newTask,
      dueDate: "Due soon",
      priority: newTaskPriority,
      completed: false,
    };

    setTasks([...tasks, newTaskObj]);

    // Add to activity log
    const lastActivityId = activityLog.length > 0 ? Math.max(...activityLog.map((a) => a.id)) : 0;
    setActivityLog([
      {
        id: lastActivityId + 1,
        action: "Added new task",
        subject: newTask,
        time: "Just now",
        status: "added",
        taskId: newTaskObj.id,
        timestamp: Date.now(),
      },
      ...activityLog,
    ]);

    setNewTask("");
    setNewTaskPriority("Medium");
  };

  const toggleTaskCompletion = (id: number) => {
    const taskToToggle = tasks.find((task) => task.id === id);
    if (!taskToToggle) return;

    const newStatus = !taskToToggle.completed;

    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: newStatus } : task)));

    // Add to activity log
    const lastActivityId = activityLog.length > 0 ? Math.max(...activityLog.map((a) => a.id)) : 0;
    setActivityLog([
      {
        id: lastActivityId + 1,
        action: newStatus ? "Completed task" : "Reopened task",
        subject: taskToToggle.text,
        time: "Just now",
        status: newStatus ? "completed" : "pending",
        taskId: id,
        timestamp: Date.now(),
      },
      ...activityLog,
    ]);
  };

  const deleteTask = (id: number) => {
    const taskToDelete = tasks.find((task) => task.id === id);
    if (!taskToDelete) return;

    setTasks(tasks.filter((task) => task.id !== id));

    // Add to activity log
    const lastActivityId = activityLog.length > 0 ? Math.max(...activityLog.map((a) => a.id)) : 0;
    setActivityLog([
      {
        id: lastActivityId + 1,
        action: "Deleted task",
        subject: taskToDelete.text,
        time: "Just now",
        status: "deleted",
        taskId: id,
        timestamp: Date.now(),
      },
      ...activityLog,
    ]);
  };

  const signOut = async () => {
    try {
      setLoading(true);
      console.log("🚀 Starting sign out process...");

      // Clear tasks from localStorage
      console.log("🗑️ Clearing tasks from localStorage...");
      localStorage.removeItem('userTasks');
      setTasks([]);
      
      // Clear activity log
      console.log("🧹 Clearing activity log...");
      setActivityLog([]);

      // Make API call to clean uploads
      console.log("🔄 Calling cleanup endpoint...");
      try {
        const response = await axios.post('http://localhost:3000/cleanup-uploads');
        console.log("✅ Cleanup response:", response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('❌ Cleanup error response:', error.response?.data);
          console.error('❌ Cleanup error status:', error.response?.status);
          console.error('❌ Full error:', error);
        }
        console.error('❌ Error cleaning uploads:', error);
      }

      // Sign out from Supabase
      console.log("🔑 Signing out from Supabase...");
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('❌ Supabase sign out error:', error);
        throw error;
      }
      
      console.log("✅ Sign out successful, redirecting...");
      window.location.href = "/";
    } catch (error) {
      console.error("❌ Error in sign out process:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
        <div className="w-full max-w-6xl grid gap-6">
          <Skeleton className="h-24 w-full rounded-lg" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={`skeleton-stat-${i}`} className="h-40 w-full rounded-lg" />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Skeleton className="h-80 w-full rounded-lg md:col-span-2" />
            <Skeleton className="h-80 w-full rounded-lg" />
          </div>
        </div>
      </div>
    );
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
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700" 
              onClick={() => (window.location.href = "/login")}
            >
              Go to Login
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <style>{scrollbarStyles}</style>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section */}
        <HeaderSection user={user} currentTime={currentTime} getInitials={getInitials} />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Activity and Tasks Section */}
          <ActivityTasksSection 
            activityLog={activityLog}
            tasks={tasks}
            progress={progress}
            newTask={newTask}
            newTaskPriority={newTaskPriority}
            setNewTask={setNewTask}
            setNewTaskPriority={setNewTaskPriority}
            addTask={addTask}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
            getStatusColor={getStatusColor}
            getStatusIcon={getStatusIcon}
          />

          {/* Profile and Quick Actions Section */}
          <ProfileActionsSection 
            user={user} 
            getInitials={getInitials} 
            signOut={signOut} 
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}

// Sub-components for better organization

const HeaderSection = ({ user, currentTime, getInitials }: {
  user: UserType;
  currentTime: Date;
  getInitials: (first: string, last: string) => string;
}) => (
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
);

const ActivityTasksSection = ({
  activityLog,
  tasks,
  progress,
  newTask,
  newTaskPriority,
  setNewTask,
  setNewTaskPriority,
  addTask,
  toggleTaskCompletion,
  deleteTask,
  getStatusColor,
  getStatusIcon,
}: {
  activityLog: ActivityItem[];
  tasks: Task[];
  progress: number;
  newTask: string;
  newTaskPriority: "Low" | "Medium" | "Urgent";
  setNewTask: (value: string) => void;
  setNewTaskPriority: (value: "Low" | "Medium" | "Urgent") => void;
  addTask: () => void;
  toggleTaskCompletion: (id: number) => void;
  deleteTask: (id: number) => void;
  getStatusColor: (status: string) => string;
  getStatusIcon: (status: string) => JSX.Element;
}) => (
  <Card className="lg:col-span-2">
    <Tabs defaultValue="activity">
      <CardHeader className="pb-0">
        <div className="flex items-center justify-between">
          <CardTitle>Dashboard Overview</CardTitle>
          <TabsList>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
          </TabsList>
        </div>
        <CardDescription>Monitor your recent activities and pending tasks</CardDescription>
      </CardHeader>

      <CardContent className="pt-6">
        {/* Activity Tab */}
        <TabsContent value="activity" className="m-0">
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h3 className="font-medium text-blue-800 mb-2">Today's Task Progress</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">Completion Rate</span>
                <span className="text-blue-600">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
              <p className="text-sm text-blue-600">
                {tasks.filter((t) => t.completed).length} of {tasks.length} tasks completed
              </p>
            </div>
          </div>

          <div className={`space-y-5 ${activityLog.length > 6 ? "max-h-[500px] overflow-y-auto pr-2 custom-scrollbar" : ""}`}>
            {activityLog.map((item) => (
              <ActivityItem 
                key={`activity-${item.id}-${item.timestamp}`}
                item={item}
                getStatusColor={getStatusColor}
                getStatusIcon={getStatusIcon}
              />
            ))}
          </div>
        </TabsContent>

        {/* Tasks Tab */}
        <TabsContent value="tasks" className="m-0">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">Daily Progress</span>
                <span className="text-blue-600">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <TaskInput 
              newTask={newTask}
              newTaskPriority={newTaskPriority}
              setNewTask={setNewTask}
              setNewTaskPriority={setNewTaskPriority}
              addTask={addTask}
            />

            <TaskList 
              tasks={tasks}
              toggleTaskCompletion={toggleTaskCompletion}
              deleteTask={deleteTask}
            />
          </div>
        </TabsContent>
      </CardContent>
    </Tabs>
  </Card>
);

const ActivityItem = ({ item, getStatusColor, getStatusIcon }: {
  item: ActivityItem;
  getStatusColor: (status: string) => string;
  getStatusIcon: (status: string) => JSX.Element;
}) => (
  <div className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0">
    <div className={`p-2 rounded-full ${getStatusColor(item.status).split(" ")[0]}`}>
      {getStatusIcon(item.status)}
    </div>
    <div className="flex-1">
      <div className="flex justify-between">
        <h4 className="font-medium text-gray-900">{item.action}</h4>
        <span className="text-xs text-gray-500">{item.time}</span>
      </div>
      {item.subject && <p className="text-sm text-gray-600">{item.subject}</p>}
      <div className="mt-2 flex items-center gap-2">
        <Badge className={`${getStatusColor(item.status)}`}>{item.status}</Badge>
        {item.taskId && (
          <Button
            variant="ghost"
            size="sm"
            className="h-6 px-2 text-xs"
            onClick={() => {
              document
                .querySelector('[data-value="tasks"]')
                ?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
            }}
          >
            View Task
          </Button>
        )}
      </div>
    </div>
  </div>
);

const TaskInput = ({
  newTask,
  newTaskPriority,
  setNewTask,
  setNewTaskPriority,
  addTask,
}: {
  newTask: string;
  newTaskPriority: "Low" | "Medium" | "Urgent";
  setNewTask: (value: string) => void;
  setNewTaskPriority: (value: "Low" | "Medium" | "Urgent") => void;
  addTask: () => void;
}) => (
  <div className="flex gap-2 mb-4">
    <Input
      type="text"
      placeholder="Add a new task..."
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && addTask()}
      className="flex-1"
    />
    <select
      value={newTaskPriority}
      onChange={(e) => setNewTaskPriority(e.target.value as "Low" | "Medium" | "Urgent")}
      className="px-2 py-1 border rounded-md text-sm"
    >
      <option value="Low">Low</option>
      <option value="Medium">Medium</option>
      <option value="Urgent">Urgent</option>
    </select>
    <Button onClick={addTask} size="sm">
      Add
    </Button>
  </div>
);

const TaskList = ({
  tasks,
  toggleTaskCompletion,
  deleteTask,
}: {
  tasks: Task[];
  toggleTaskCompletion: (id: number) => void;
  deleteTask: (id: number) => void;
}) => (
  <div className="space-y-3">
    {tasks.length === 0 ? (
      <div className="text-center py-6 text-gray-500">No tasks yet. Add a task to get started.</div>
    ) : (
      tasks.map((task) => (
        <TaskItem 
          key={`task-${task.id}`}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      ))
    )}
  </div>
);

const TaskItem = ({
  task,
  toggleTaskCompletion,
  deleteTask,
}: {
  task: Task;
  toggleTaskCompletion: (id: number) => void;
  deleteTask: (id: number) => void;
}) => (
  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg group">
    <input
      type="checkbox"
      checked={task.completed}
      onChange={() => toggleTaskCompletion(task.id)}
      className="h-5 w-5 rounded border-gray-300 text-blue-600"
    />
    <div className="flex-1">
      <p className={`font-medium ${task.completed ? "line-through text-gray-400" : ""}`}>
        {task.text}
      </p>
      <p className="text-sm text-gray-500">{task.dueDate}</p>
    </div>
    <Badge
      className={
        task.priority === "Urgent"
          ? "bg-red-100 text-red-800 hover:bg-red-200"
          : task.priority === "Medium"
            ? "bg-blue-100 text-blue-800 hover:bg-blue-200"
            : "bg-green-100 text-green-800 hover:bg-green-200"
      }
    >
      {task.priority}
    </Badge>
    <Button
      variant="ghost"
      size="icon"
      className="opacity-0 group-hover:opacity-100 transition-opacity"
      onClick={() => deleteTask(task.id)}
    >
      <Trash className="h-4 w-4 text-red-500" />
      <span className="sr-only">Delete task</span>
    </Button>
  </div>
);

const ProfileActionsSection = ({
  user,
  getInitials,
  signOut,
  loading,
}: {
  user: UserType;
  getInitials: (first: string, last: string) => string;
  signOut: () => void;
  loading: boolean;
}) => (
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
          <ProfileInfoItem icon={<Mail className="h-5 w-5 text-gray-400" />} text={user.email} />
          <ProfileInfoItem 
            icon={<Calendar className="h-5 w-5 text-gray-400" />} 
            text={`Member since ${new Date(user.created_at).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}`} 
          />
          <ProfileInfoItem 
            icon={<User className="h-5 w-5 text-gray-400" />} 
            text={`Full Name: ${user.first_name} ${user.last_name}`} 
          />
          <ProfileInfoItem 
            icon={<Building className="h-5 w-5 text-gray-400" />} 
            text={`Department: ${user.user_type === "radiologue" ? "Radiology" : "Medical"}`} 
          />
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <QuickActionButton icon={<Bell className="mr-2 h-4 w-4" />} text="Notifications" />
        <QuickActionButton 
          icon={<LogOut className="mr-2 h-4 w-4" />} 
          text={loading ? "Signing out..." : "Sign Out"} 
          onClick={signOut}
          disabled={loading}
          className="text-red-600 hover:text-red-700 hover:bg-red-50"
        />
      </CardContent>
    </Card>
  </div>
);

const ProfileInfoItem = ({ icon, text }: { icon: JSX.Element; text: string }) => (
  <div className="flex items-center space-x-3">
    {icon}
    <span className="text-sm">{text}</span>
  </div>
);

const QuickActionButton = ({
  icon,
  text,
  onClick,
  disabled = false,
  className = "",
}: {
  icon: JSX.Element;
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}) => (
  <Button
    variant="ghost"
    className={`w-full justify-start ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {icon}
    {text}
  </Button>
);