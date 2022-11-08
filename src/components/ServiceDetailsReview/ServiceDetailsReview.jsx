import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetailsReview = () => {
  const service = useLoaderData();
  const { name, picture, description, price } = service;
  return (
    <div className="grid gap-2" style={{ gridTemplateColumns: "3fr 1fr" }}>
      <div
        className="hero min-h-screen rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `url(${picture})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold">{name}</h1>
            <p className="mb-5 text-justify">{description}</p>
            <div className="indicator">
              <span className="indicator-item badge badge-primary">
                ${price}
              </span>
              <div className="grid w-32 h-10 bg-orange-600 rounded-full place-items-center">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-3 rounded-2xl bg-slate-200">
        <h1>Review</h1>
      </div>
    </div>
  );
};

export default ServiceDetailsReview;
