import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const logoutUser = () => {
    logOut()
      .then(() => toast.success("Logout Successful"))
      .catch((err) => toast.error(err.message));
  };
  return (
    <div>
      <div className="navbar h-20">
        <div className="flex-1">
          <Link to="/">
            <img className="w-24" src={logo} alt="logo" />
          </Link>
        </div>

        <div className="mr-2">
          <Link to="/" className="link">
            Home
          </Link>
          {user?.email && (
            <div className="ml-2 gap-2 flex">
              <Link to="/myreview" className="link">
                My Review
              </Link>
              <Link to="/addservice" className="link">
                Add Service
              </Link>
            </div>
          )}
        </div>

        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              {user?.email ? (
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt="" />
                </div>
              ) : (
                <FaUserTie className="w-8 h-8 p-1" />
              )}
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              {user?.email ? (
                <>
                  <li>
                    <a href="/" className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">Settings</a>
                  </li>
                  <li>
                    <button onClick={logoutUser}>Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/signup">Signup</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
