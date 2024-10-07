import React from "react";
import { IoMdCall } from "react-icons/io";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-[#C11900] text-[#FFDB00] font-thin">
        <ul className="flex justify-between text-xl py-4">
          <li className="ml-20">
            <h1>Logo</h1>
          </li>
          <li className="flex gap-3 mr-20">
            <IoMdCall className="mt-1 h-7 w-7" />
            <h1>+91-98765 43210</h1>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
