import React from "react";
import "./Home.css";
import photographer from "../../assets/photographer.jpg";
const Home = () => {
  return (
    <div>
      <div className="min-h-screen homebg my-10 rounded-3xl overflow-hidden">
        <div className="absolute flex flex-col  top-2/4 -translate-y-2/4 p-5">
          <h1 className="text-6xl font-black uppercase text-center text-white">
            Wildlife photography is the art of photographing <br />
            wildlife in its natural surroundings
          </h1>
          <button className="btn btn-outline btn-warning w-52 mx-auto my-5">
            Contact me
          </button>
        </div>
      </div>
      <div className="flex gap-3 p-20 bg-slate-200 min-h-screen">
        <div className="w-2/4">
          <img className="w-full" src={photographer} alt="" />
        </div>
        <div className="w-2/4">
          <h1 className="text-5xl">About Photographer</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
