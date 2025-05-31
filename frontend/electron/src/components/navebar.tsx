import { GoHomeFill } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";
import { FaImages } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function Navbar({ isOpen, setIsOpen }: { isOpen: string, setIsOpen: (name: string) => void }) {
  const [userType, setUserType] = useState<"radiologue" | "doctor" | null>(null);

  useEffect(() => {
    const getUserType = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserType(user.user_metadata?.user_type || null);
      }
    };
    getUserType();
  }, []);

  const handleClick = (name: string) => {
    setIsOpen(name);
  };

  const navItems = [
    { id: "home", icon: <GoHomeFill size={30} /> },
    { id: "radio sent", icon: <FaImages size={30} /> },
    { id: "patients", icon: <IoIosPeople size={30} /> },
    // Only show add option for radiologists
    ...(userType === "radiologue" ? [{ id: "add", icon: <IoMdAddCircle size={30} /> }] : []),
  ];

  return (
    <div className="flex flex-col items-center bg-white p-4 w-28 h-screen rounded-r-3xl shrink-0">
      <img src="../public/img/logo.png" alt="logo" className="w-40 h-20 mb-8" />
      
      <ul className="space-y-6 w-full">
        {navItems.map((item) => (
          <li key={item.id} className="w-full">
            <button
              onClick={() => handleClick(item.id)}
              className={`w-full p-3 rounded-lg flex justify-center items-center transition-colors ${
                isOpen === item.id 
                  ? "bg-[#5D7285] text-white" 
                  : "hover:bg-gray-200 text-[#2F80ED]"
              }`}
            >
              {item.icon}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}