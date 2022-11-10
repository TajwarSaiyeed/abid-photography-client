import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";

/** Profile Page  */

const Myprofile = () => {
  const { user, logOut, setUserphotourl } = useContext(AuthContext);
  useTitle(`Profile ${user?.displayName}`);
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
        <div className="flex items-center mt-10 justify-center">
          <div className="indicator ">
            <span className="indicator-item badge badge-error">
              <button onClick={logoutUser}>Logout</button>
            </span>
            <div className="grid w-40 h-40 p-2 rounded-full bg-base-300 justify-items-center place-items-center">
              <img
                src={user.photoURL}
                alt="Shoes"
                className=" w-full h-full rounded-full"
              />
            </div>
          </div>
        </div>
        <figure className="px-10 pt-10"></figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl">{user.displayName}</h2>
          <div className="card-actions">
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/myreview" className="link">
              My Review
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
