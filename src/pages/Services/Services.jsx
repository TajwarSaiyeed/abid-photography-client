import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "../../components/Service/Service";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Services = () => {
  const [allService, setAllService] = useState([]);
  const { loading } = useContext(AuthContext);
  const [addbyuser, setAddbyuser] = useState([]);
  useTitle("Services");
  useEffect(() => {
    fetch("https://service-review-server-abid.vercel.app/services?id=")
      .then((res) => res.json())
      .then((data) => {
        setAllService(data);
      });
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
        <button className="btn loading">loading</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <h1 className="font-bold text-5xl">Services</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-3 p-5 gap-5 justify-items-center">
        {allService.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
      {addbyuser.length > 0 && (
        <>
          <h1 className="font-bold text-5xl">Services Add By User</h1>
          <div className="grid grid-cols-1 my-3 p-5 gap-5 justify-items-center">
            {addbyuser.map((service) => (
              <Service key={service._id} service={service} />
            ))}
          </div>
        </>
      )}
      <Link className="btn w-80 mb-3 mx-auto" to="/">
        Home
      </Link>
    </div>
  );
};

export default Services;
