import React from "react";
import logo from '../../assets/logo.jpg';


const Navbar = () => {
  return (
    <div>
      <nav className="font-abc shadow-md ">
        <ul className="flex justify-between text-lg md:text-xl py-4 items-center  ">
          <li className="md:ml-20 ml-5">
            <img src={logo} alt=""  className="w-20" />
          </li>
          <li className="flex gap-3 md:mr-20 mr-5 text-sm">
         
            <h1 className="text-sm font-semibold">+91 99422 08824</h1>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
