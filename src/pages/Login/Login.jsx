import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const provider = new GoogleAuthProvider();
const Login = () => {
  const { user, loading, googleLoginSignin, loginUserWIthEmailPassword } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleLoginSignin(provider)
      .then((res) => {
        const user = res.user;
        const currentUser = {
          email: user.email,
        };
        toast.success("User Logged In");
        fetch("https://service-review-server-abid.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("photography-token", data.token);
          });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleUserLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUserWIthEmailPassword(email, password)
      .then((res) => {
        const user = res.user;
        const currentUser = {
          email: user.email,
        };
        toast.success("User Logged In");
        fetch("https://service-review-server-abid.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("photography-token", data.token);
          });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  if (loading) {
    return (
      <div className="flex w-full justify-center">
        <button className="btn loading">loading</button>;
      </div>
    );
  }
  if (user) {
    return <Navigate to={from}></Navigate>;
  }

  return (
    <div className="min-h-screen my-5 flex flex-col items-center justify-center bg-slate-200 rounded-2xl">
      <h1 className="font-bold text-2xl my-5 uppercase">
        Login to Abid PhotoGraphy
      </h1>
      <button
        onClick={handleGoogleLogin}
        className="btn bg-blue-600 border-none"
      >
        <FcGoogle className="bg-white rounded-full p-1 w-6 h-6" /> &nbsp; Sign
        in with Google
      </button>

      <form
        onSubmit={handleUserLogin}
        className="lg:w-2/4 w-full p-5 flex flex-col justify-center items-center"
      >
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input
            type="email"
            required
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
            required
            placeholder="6+ characters"
            className="input input-bordered w-full"
          />
        </div>
        <input
          type="submit"
          className="btn btn-outline btn-accent my-5 max-w-96 w-36 min-w-40"
          value="Login"
        />
        <div className="font-semibold text-xl">
          Dont't Have An Account?{" "}
          <Link className="link link-neutral" to="/signup">
            Signup
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
