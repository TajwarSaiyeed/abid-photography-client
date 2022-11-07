import React from "react";
import { useLoaderData } from "react-router-dom";
import Service from "../../components/Service/Service";

const Services = () => {
  const services = useLoaderData();
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <h1 className="font-bold text-5xl">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-3 p-5 gap-5 justify-items-center">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
