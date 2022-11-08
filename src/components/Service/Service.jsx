import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  console.log(service);
  const { name, picture, description, price } = service;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className="w-52 lg:w-80 h-full" src={picture} alt="Movie" />
      </figure>
      <div className="card-body w-2/4 lg:w-full">
        <h2 className="card-title">{name}</h2>
        <p>{description.length > 100 && description.slice(0, 100) + "..."}</p>
        <div className="card-actions justify-end">
          <div className="flex justify-center items-center gap-5">
            <span className="text-orange-400 font-bold text-3xl">${price}</span>
            <Link to={`/service/${name}`} className="btn btn-primary">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
