import { GoHomeFill } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";
import { FaImages } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";   

export default function Navbar( {isOpen, setIsOpen} : {isOpen: string, setIsOpen: (name: string) => void}) {
  
  const handleClick = (name: string) => {
    setIsOpen(name);
  };

  return (
    <div className=" flex flex-col items-center bg-white p-4 w-28 h-screen rounded-r-3xl shrink-0">
      <img src="../public/img/logo.png" alt="logo" className="w-40 h-20 mb-8" />
      
      <ul className="space-y-6 w-full">
        {[
          { id: "home", icon: <GoHomeFill size={30} /> },
          { id: "radio sent", icon: <FaImages  size={30} /> },
          { id: "patients", icon: <IoIosPeople size={30} /> },
          { id: "add", icon: <IoMdAddCircle size={30} /> },
        ].map((item) => (
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