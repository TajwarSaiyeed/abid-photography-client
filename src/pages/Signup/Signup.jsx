import React from "react";
import { FcGoogle } from "react-icons/fc";
const Signup = () => {
  return (
    <div className="min-h-screen my-5 flex flex-col items-center justify-center bg-slate-200 rounded-2xl">
      <h1 className="font-bold text-2xl my-5 uppercase">
        Sign up to Abid PhotoGraphy
      </h1>
      <button className="btn bg-blue-600 border-none">
        <FcGoogle className="bg-white rounded-full p-1 w-6 h-6" /> &nbsp; Sign
        up with Google
      </button>

      <form className="w-2/4 flex flex-col justify-center">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-bold">Name</span>
          </label>
          <input
            type="text"
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
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
          <input
            type="password"
            placeholder="6+ characters"
            className="input input-bordered w-full"
          />
        </div>
        <input
          type="submit"
          className="btn btn-outline btn-accent my-5 w-96 mx-auto"
          value="register"
        />
      </form>
    </div>
  );
};

export default Signup;
