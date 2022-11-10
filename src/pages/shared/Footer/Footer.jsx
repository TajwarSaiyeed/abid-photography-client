import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Footer = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://service-review-server-abid.vercel.app/services?id=")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);
  return (
    <footer className="footer my-2 p-10 bg-base-200 text-base-content">
      <div>
        <img className="w-52" src={logo} alt="" />
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        {/* <a href="/" className="link link-hover">
          Branding
        </a> */}
        {services.map((service) => (
          <Link key={service._id} to={`/service/${service._id}`}>
            {service.name}
          </Link>
        ))}
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a href="/" className="link link-hover">
          About us
        </a>
        <a href="/" className="link link-hover">
          Contact
        </a>
        <a href="/" className="link link-hover">
          Jobs
        </a>
        <a href="/" className="link link-hover">
          Press kit
        </a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a href="/" className="link link-hover">
          Terms of use
        </a>
        <a href="/" className="link link-hover">
          Privacy policy
        </a>
        <a href="/" className="link link-hover">
          Cookie policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
