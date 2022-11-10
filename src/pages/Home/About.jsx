import React from "react";
import photographer from "../../assets/photographer.jpg";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-3 p-5 md:p-14 lg:p-20 bg-slate-200 min-h-96 rounded-2xl">
      <div className="w-full lg:w-2/4">
        <img className="w-full h-full rounded-2xl" src={photographer} alt="" />
      </div>
      <div className="w-full lg:w-2/4 bg-slate-200 shadow-white shadow-lg  p-5 rounded-2xl">
        <h1 className="text-xl lg:text-5xl font-bold">About Photographer</h1>
        <p className="text-xl text-justify my-5">
          Tajwar Saiyeed Abid,
          <br />
          Tajwar was born on 2004 as the first child of three children of
          parents. In 2013, he complete his primary education. In 2019, he
          complete his secondary Education. In 2021, he complete his higher
          Secondary education.
        </p>
      </div>
    </div>
  );
};

export default About;
