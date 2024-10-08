import React from "react";
import { IoMdCall } from "react-icons/io";

const Navbar = () => {
  return (
    <div>
      <nav className="font-abc shadow-md ">
        <ul className="flex justify-between text-lg md:text-xl py-4">
          <li className="md:ml-20 ml-5">
            <h1>Logo</h1>
          </li>
          <li className="flex gap-3 md:mr-20 mr-5">
            <IoMdCall className="mt-0 h-7 w-7" />
            <h1>+91-98765 43210</h1>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
