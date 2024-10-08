import React from "react";
import { IoMdCall } from "react-icons/io";

const Navbar = () => {
  return (
    <div>
      <nav className="font-abc shadow-md ">
        <ul className="flex justify-between text-lg md:text-xl py-4 items-center  ">
          <li className="md:ml-20 ml-5">
            <img src="https://ugc.production.linktr.ee/721e0bcc-2bac-4276-b0eb-fbf98850c24b_341003461-131759759779160-525686003715477474-n.jpeg?io=true&size=avatar-v3_0" alt=""  className="w-14" />
          </li>
          <li className="flex gap-3 md:mr-20 mr-5 text-sm">
         
            <h1 className="text-sm">+91-98765 43210</h1>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
