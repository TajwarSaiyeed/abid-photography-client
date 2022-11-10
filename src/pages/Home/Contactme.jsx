import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Marker, Popup } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Contactme = () => {
  const { user } = useContext(AuthContext);
  const sendMessage = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;
    const msg = {
      name,
      email,
      subject,
      message,
    };

    fetch("https://service-review-server-abid.vercel.app/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("photography-token")}`,
      },
      body: JSON.stringify(msg),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Message Sent!");
          form.reset();
        }
      });
  };
  const position = [22.0644, 452.0964];
  return (
    <div className="flex flex-col justify-center items-center p-10 my-3 bg-slate-200 rounded-2xl">
      <h1 className="text-3xl font-bold">Contact Me</h1>
      <div className="flex flex-col justify-center lg:flex-row w-full">
        <div className="w-full lg:w-2/4">
          <form
            onSubmit={sendMessage}
            className="flex flex-col justify-center items-center"
          >
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your Name</span>
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
                <span className="label-text">Enter Your Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Type here"
                className="input input-bordered w-full"
                defaultValue={user?.email}
                required
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full h-24"
                name="message"
                placeholder="Your Message Here"
              ></textarea>
            </div>
            <div className="form-control">
              <input
                type="submit"
                className="btn mt-2 btn-wide"
                value="Send Message"
              />
            </div>
          </form>
        </div>
        <div className="w-full p-5 lg:w-2/4">
          <div className="bg-white rounded-2xl min-h-2/4 shadow-white shadow-xl overflow-hidden">
            <MapContainer center={position} zoom={11} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
