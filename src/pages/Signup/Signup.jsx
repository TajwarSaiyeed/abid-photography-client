import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const provider = new GoogleAuthProvider();
const Signup = () => {
  const { googleLoginSignin, update, createUserWithEmailPassword, user } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignup = () => {
    googleLoginSignin(provider)
      .then(() => {
        toast.success("user succesfully signup ");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };

  const handleUserSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const namephone = {
      displayName: name,
    };

    createUserWithEmailPassword(email, password)
      .then(() => {
        toast.success("user succesfully signup ");
        update(namephone)
          .then(() => {})
          .catch((err) => console.log(err));
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };

  if (user) {
    return <Navigate to="/"></Navigate>;
  }
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

      <form
        onSubmit={handleUserSignup}
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
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
          <input
            type="password"
            name="password"
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
