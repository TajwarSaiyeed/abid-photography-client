import React from "react";
import { Link } from "react-router-dom";
import img404 from "../../assets/notFound.jpg";

const NotFound = () => {
  return (
    <div className="relative">
      <img className="w-full h-full blur-sm" src={img404} alt="" />
      <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
        <Link to="/" className="btn btn-success">
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
