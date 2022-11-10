import { GoogleAuthProvider } from "firebase/auth";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { storage } from "../../firebase/firebase.config";
import { v4 } from "uuid";

const provider = new GoogleAuthProvider();
const Signup = () => {
  const [image, setImage] = useState(null);
  const [imgurl, setImgurl] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const imageListRef = ref(storage, "images/");
  const {
    loading,
    googleLoginSignin,
    update,
    createUserWithEmailPassword,
    user,
    setUserphotourl,
  } = useContext(AuthContext);
  const from = location.state?.from?.pathname || "/";

  const upload = () => {
    // const image = e.target.files[0];
    if (image === null) return;

    const imageSplit = `images/${image.name + v4()}`.split(" ").join("");

    const imageRef = ref(storage, imageSplit);
    // console.log("imageRef : ", imageRef);
    uploadBytes(imageRef, image).then(() => {
      toast.success("image uploaded");
      setImgurl(imageSplit);
    });
  };
  useEffect(() => {
    // setDownloadUrl(null);
    listAll(imageListRef).then((res) => {
      const im = res.items.find((i) => i._location.path_ === imgurl);
      if (im) {
        getDownloadURL(im).then((url) => {
          setDownloadUrl(url);
        });
      }
    });
  }, [imgurl, imageListRef, downloadUrl]);

  const handleGoogleSignup = () => {
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

  const handleUserSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const namephoto = {
      displayName: name,
      photoURL: downloadUrl,
    };

    createUserWithEmailPassword(email, password)
      .then((res) => {
        const user = res.user;
        const currentUser = {
          email: user.email,
        };
        toast.success("user succesfully signup ");
        setUserphotourl(downloadUrl);
        update(namephoto)
          .then(() => {})
          .catch((err) => console.log(err));
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
      .catch((err) => toast.error(err.message));
  };
  if (loading) {
    return (
      <div className="flex w-full justify-center">
        <button className="btn loading">loading</button>
      </div>
    );
  }
  if (user) {
    return <Navigate to={from}></Navigate>;
  }
  return (
    <div className="min-h-screen py-5 my-5 flex flex-col items-center justify-center bg-slate-200 rounded-2xl">
      <div className="w-50 h-50 rounded-full overflow-hidden">
        <img src={downloadUrl} className="w-full h-full rounded-full" alt="" />
      </div>
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

      <div
        className={
          !downloadUrl
            ? "bg-red-500 my-5 form-control border-black border p-5 rounded-xl lg:w-2/4 "
            : "form-control my-5 border-black border p-5 rounded-xl lg:w-2/4"
        }
      >
        <label className="label">
          <span className="label-text font-bold">User Image</span>
        </label>
        <input
          type="file"
          name="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="file-input file-input-ghost w-full"
          required
        />
        <br />
        <button className="btn" onClick={upload}>
          Upload
        </button>
      </div>

      <form
        onSubmit={handleUserSignup}
        className="lg:w-2/4 w-full p-5 flex flex-col justify-center items-center"
      >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-bold">Name</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-bold">Image Url</span>
          </label>
          <input
            type="text"
            readOnly
            required
            defaultValue={downloadUrl}
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
          className={`${
            !downloadUrl && "btn-disabled"
          } btn btn-outline btn-accent my-5 max-w-96 w-80 min-w-40`}
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
