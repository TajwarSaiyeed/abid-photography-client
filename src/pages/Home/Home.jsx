import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import photographer from "../../assets/photographer.jpg";
import { Link, useLoaderData } from "react-router-dom";
import Service from "../../components/Service/Service";
import Contactme from "./Contactme";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
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
            <br />
            Tajwar was born on 2004 as the first child of three children of
            parents. In 2013, he complete his primary education. In 2019, he
            complete his secondary Education. In 2021, he complete his higher
            Secondary education.
          </p>
        </div>
      </div>

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
