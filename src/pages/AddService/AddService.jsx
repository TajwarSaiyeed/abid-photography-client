import React, { useContext, useEffect, useState } from "react";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase/firebase.config";
import { v4 } from "uuid";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import { useNavigate } from "react-router-dom";
const AddService = () => {
  useTitle("Add Service");
  const [image, setImage] = useState(null);
  const [imgurl, setImgurl] = useState(null);
  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setserviceDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const imageListRef = ref(storage, "serviceImages/");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const upload = () => {
    if (image === null) return;

    const imageSplit = `serviceImages/${image.name + v4()}`.split(" ").join("");

    const imageRef = ref(storage, imageSplit);
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
  const handleUserSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const picture = form.picture.value;
    const price = form.price.value;
    const description = form.description.value;

    const service = {
      name,
      email,
      picture,
      price,
      description,
      userPhoto: user.photoURL,
    };

    fetch("https://service-review-server-abid.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("photography-token")}`,
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          toast.success("Service Added SuccessFully");
          navigate("/services");
        }
      });
  };
  return (
    <div className="flex flex-col w-full py-5 gap-4 items-center">
      <h1 className="text-5xl font-bold uppercase">Add Services</h1>
      <div className="flex flex-col lg:flex-row gap-4 w-full">
        <div
          className={`${
            !downloadUrl ? "w-full lg:w-2/4" : "w-full lg:w-2/4"
          } px-4 bg-slate-200 rounded-2xl`}
        >
          <div
            className={
              !downloadUrl
                ? "bg-red-500 my-5 form-control border-black border p-5 rounded-xl w-full"
                : "form-control my-5 border-black border p-5 rounded-xl w-full"
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
            className="w-full flex flex-col justify-center items-center"
          >
            {downloadUrl && (
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Service Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Type here"
                  onChange={(e) => setServiceName(e.target.value)}
                  className="input input-bordered w-full"
                />
              </div>
            )}

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-bold">Image Url</span>
              </label>
              <input
                type="text"
                name="picture"
                readOnly
                required
                placeholder="Image URL"
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
                readOnly
                defaultValue={user.email}
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            {downloadUrl && (
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text font-bold">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="Type here"
                  onChange={(e) => setPrice(e.target.value)}
                  className="input input-bordered w-full"
                />
              </div>
            )}
            {downloadUrl && (
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-24 w-full"
                  name="description"
                  required
                  onChange={(e) => setserviceDescription(e.target.value)}
                  placeholder="Service Description Here"
                ></textarea>
              </div>
            )}

            <input
              type="submit"
              className={`${
                !downloadUrl && "btn-disabled"
              } btn btn-accent my-5 w-96`}
              value="Add Service"
            />
          </form>
        </div>
        {downloadUrl && (
          <div className="w-full lg:w-2/4 rounded-2xl overflow-hidden bg-slate-200">
            <div className="w-full flex px-10 flex-col bg-slate-200 justify-center items-center">
              <h1 className="text-3xl mt-5 mb-10 font-bold">Service Preview</h1>
              <div className="card w-full bg-base-100 shadow-xl mb-5 image-full">
                <figure>
                  <img className="w-full" src={downloadUrl} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{serviceName}</h2>
                  <p>{serviceDescription}</p>
                  <div className="flex card-actions justify-end">
                    <span className="text-orange-400 font-bold text-3xl">
                      ${price}
                    </span>
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddService;
