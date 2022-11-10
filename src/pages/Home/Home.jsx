import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { Link, useLoaderData } from "react-router-dom";
import Service from "../../components/Service/Service";
import Contactme from "./Contactme";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import About from "./About";
const Home = () => {
  const services = useLoaderData();
  const { loading } = useContext(AuthContext);
  const [allService, setAllService] = useState([]);
  const [addbyuser, setAddbyuser] = useState([]);

  useEffect(() => {
    fetch("https://service-review-server-abid.vercel.app/services?id=")
      .then((res) => res.json())
      .then((data) => setAllService(data));
  }, [addbyuser]);

  useEffect(() => {
    const setByUser = allService.filter((service) => service["email"]);
    if (setByUser) {
      setAddbyuser(setByUser);
    }
  }, [allService]);

  if (loading) {
    return (
      <div className="flex w-full justify-center">
        <button className="btn loading">loading</button>;
      </div>
    );
  }
  return (
    <div>
      <div className="min-h-screen homebg my-10 rounded-3xl overflow-hidden">
        <div className="absolute flex flex-col top-2/4 -translate-y-2/4 p-5">
          <h1 className="text-xl lg:text-6xl font-black uppercase text-center text-white">
            Photography can capture someone's heart and soul.
          </h1>
          <button className="btn btn-outline btn-warning w-52 mx-auto my-5">
            Contact me
          </button>
        </div>
      </div>
      <About />
      <div className="flex flex-col bg-slate-200 my-2 rounded-2xl p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 my-3 p-5 gap-5 justify-items-center ">
          {services.map((service) => (
            <Service key={service._id} service={service} />
          ))}
        </div>
        <Link className="btn w-80 mx-auto" to="/services">
          See All
        </Link>
      </div>
      <div>
        <h1 className="font-bold text-5xl text-center my-5">
          Services Add By User
        </h1>
        <div className="flex flex-col bg-slate-200 my-2 rounded-2xl p-4">
          <div className="grid grid-cols-1 my-3 p-2 gap-5 justify-items-center ">
            {addbyuser.map((service) => (
              <Service key={service._id} service={service} />
            ))}
          </div>
        </div>
      </div>
      <Contactme />
    </div>
  );
};

export default Home;
