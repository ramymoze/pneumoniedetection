import { IoPersonSharp } from "react-icons/io5";
export default function Patientinfo_add() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center text-2xl font-bold text-[#5D7285]">
          <div className=" border-2 border-[black]  items-center rounded-full p-4 mt-32 text-center  ">
            <IoPersonSharp size={150} />
          </div>
          <div className="mt-7">
          Patient info
          </div>
            <div className="mt-7">
                Name  <br />
                last name <br />
                age <br />
                date of birth <br />
                place of birth <br />
                medical condition <br />

             </div>
        </div>
      </div>
    </>
  );
}
