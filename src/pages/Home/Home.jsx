import React from "react";
import "./Home.css";
import photographer from "../../assets/photographer.jpg";
const Home = () => {
  return (
    <div>
      <div className="min-h-screen homebg my-10 rounded-3xl overflow-hidden">
        <div className="absolute flex flex-col  top-2/4 -translate-y-2/4 p-5">
          <h1 className="text-xl lg:text-6xl font-black uppercase text-center text-white">
            Wildlife photography is the art of photographing <br />
            wildlife in its natural surroundings
          </h1>
          <button className="btn btn-outline btn-warning w-52 mx-auto my-5">
            Contact me
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-3 p-5 lg:p-20 bg-slate-200 min-h-96 rounded-2xl">
        <div className="w-full lg:w-2/4">
          <img
            className="w-full h-full rounded-2xl"
            src={photographer}
            alt=""
          />
        </div>
        <div className="w-full lg:w-2/4 bg-slate-200 shadow-white shadow-lg  p-5 rounded-2xl">
          <h1 className="text-xl lg:text-5xl font-bold">About Photographer</h1>
          <p className="text-xl text-justify my-5">
            Tajwar Saiyeed Abid,
            <br /> Wildlife photography is a loosely-defined profession which
            demands a passion for nature and art. Wildlife photographers make a
            career of traveling to remote areas and taking pictures of wild
            animals and natural scenery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
