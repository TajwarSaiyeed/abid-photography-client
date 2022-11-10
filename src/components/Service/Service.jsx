import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Service = ({ service }) => {
  // console.log(service);
  const { _id, name, picture, description, price } = service;
  return (
    <div
      className="card card-side bg-base-100 shadow-xl min-w-96"
      style={{ maxWidth: "593px" }}
    >
      <PhotoProvider>
        <PhotoView src={picture}>
          <figure>
            <img className="w-52 lg:w-80 h-full" src={picture} alt="Movie" />
          </figure>
        </PhotoView>
      </PhotoProvider>
      <div className="card-body w-2/4 lg:w-full">
        <h2 className="card-title">{name}</h2>
        <p>
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>
        <div className="card-actions justify-end">
          <div className="flex justify-center items-center gap-5">
            {service?.userPhoto && (
              <img
                className="w-6 h-6 rounded-full relative right-0"
                src={service.userPhoto}
                alt="Movie"
              />
            )}
            <span className="text-orange-400 font-bold text-3xl">${price}</span>
            <Link to={`/service/${_id}`} className="btn btn-primary">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
