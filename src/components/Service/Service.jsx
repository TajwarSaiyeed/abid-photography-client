import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { name, picture, description } = service;
  const routename = name.split(" ").join("");
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className="w-52 lg:w-80 h-full" src={picture} alt="Movie" />
      </figure>
      <div className="card-body w-2/4 lg:w-full">
        <h2 className="card-title">{name}</h2>
        <p>{description.length > 100 && description.slice(0, 100) + "..."}</p>
        <div className="card-actions justify-end">
          <Link to={`/service/${routename}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
