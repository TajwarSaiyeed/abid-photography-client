import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../pages/shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="px-5 lg:px-20 py-3 bg-slate-300">
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
