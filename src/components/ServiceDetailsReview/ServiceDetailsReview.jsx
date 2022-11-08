import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const ServiceDetailsReview = () => {
  const service = useLoaderData();
  const { name, picture, description, price } = service;
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-2">
        <div
          className="hero min-h-screen rounded-tl-3xl overflow-hidden"
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
        <div className="px-3 w-full lg:w-96 rounded-tr-3xl bg-slate-200">
          <h1>Review</h1>
        </div>
      </div>
      <div className="bg-slate-200 mt-3 p-3 flex justify-center rounded-bl-3xl rounded-br-3xl">
        {user?.email ? (
          <form
            // onSubmit={handleUserLogin}
            className="w-2/4 flex flex-col justify-center items-center"
          >
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Type here"
                className="input input-bordered w-full"
                readOnly
                defaultValue={user?.email}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24 w-full"
                name="message"
                placeholder="Your Message Here"
              ></textarea>
            </div>
            <input
              type="submit"
              className="btn btn-outline btn-accent my-5 w-96 "
              value="register"
            />
          </form>
        ) : (
          <>
            Please Login To Add A Review &nbsp;
            <Link className="link link-error" to="/login">
              {" "}
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceDetailsReview;
