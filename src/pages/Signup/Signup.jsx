import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const provider = new GoogleAuthProvider();
const Signup = () => {
  const { googleLoginSignin } = useContext(AuthContext);

  const handleGoogleSignup = () => {
    googleLoginSignin(provider)
      .then(() => {
        toast.success("user succesfully signup ");
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className="min-h-screen my-5 flex flex-col items-center justify-center bg-slate-200 rounded-2xl">
      <h1 className="font-bold text-2xl my-5 uppercase">
        Sign up to Abid PhotoGraphy
      </h1>
      <button
        onClick={handleGoogleSignup}
        className="btn bg-blue-600 border-none"
      >
        <FcGoogle className="bg-white rounded-full p-1 w-6 h-6" /> &nbsp; Sign
        up with Google
      </button>

      <form className="w-2/4 flex flex-col justify-center items-center">
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
          className="btn btn-outline btn-accent my-5 w-96 "
          value="register"
        />
        <div className="font-semibold text-xl">
          Already Have An Account?{" "}
          <Link className="link link-neutral" to="/login">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
