import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "./Home";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />

      <div>
        <Home />
      </div>
      <div>{/* bannner */}</div>
      <div>{/* footer */}</div>
    </div>
  );
};

export default HomeLayout;
