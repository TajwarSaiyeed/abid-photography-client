import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Myprofile = () => {
  const { user, logOut, setUserphotourl } = useContext(AuthContext);
  const logoutUser = () => {
    logOut()
      .then(() => {
        setUserphotourl(null);
        toast.success("Logout Successful");
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={user.photoURL} alt="Shoes" className="rounded-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl">{user.displayName}</h2>
          <div className="card-actions">
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/myreview" className="link">
              My Review
            </Link>
            <div className="badge badge-error gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-4 h-4 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
              <button onClick={logoutUser}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
