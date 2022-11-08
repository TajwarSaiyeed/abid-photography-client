import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const ServiceDetailsReview = () => {
  const [reviews, setReviews] = useState([]);
  const service = useLoaderData();

  const { _id, name, picture, description, price } = service;
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/review/${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [_id, reviews]);

  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const reviewMessage = form.review.value;

    const review = {
      username,
      email,
      reviewMessage,
      serviceId: _id,
      serviceTitle: name,
      servicePicture: picture,
      userImage: user.photoURL,
    };
    console.log(review);

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-2">
        <div
          className="hero min-h-screen rounded-tl-3xl overflow-hidden"
          style={{
            backgroundImage: `url(${picture})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-3xl font-bold">{name}</h1>
              <p className="mb-5 text-justify">{description}</p>
              <div className="indicator">
                <span className="indicator-item badge badge-primary">
                  ${price}
                </span>
                <div className="grid w-32 h-10 bg-orange-600 rounded-full place-items-center">
                  Buy Now
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-3 w-full lg:w-96 max-h-screen overflow-y-scroll rounded-tr-3xl bg-slate-200 flex flex-col items-center">
          <h1 className="text-green-500 font-bold text-xl my-2">Review</h1>
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <div
                key={review._id}
                className="flex min-h-24 items-center w-full gap-3 my-2 bg-slate-300 p-2 rounded-md"
              >
                <div>
                  <img
                    className="min-w-12 w-16 max-w-20 rounded-full"
                    src={review.userImage}
                    alt=""
                  />
                </div>
                <div>
                  <h1>{review.username}</h1>
                  <p>{review.reviewMessage}</p>
                </div>
              </div>
            ))
          ) : (
            <div>
              <h2 className="text-red-500 font-bold">There is no review</h2>
            </div>
          )}
        </div>
      </div>
      <div className="bg-slate-200 mt-3 p-3 flex justify-center rounded-bl-3xl rounded-br-3xl">
        {user?.email ? (
          <form
            onSubmit={handleReview}
            className="w-2/4 flex flex-col justify-center items-center"
          >
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="Type here"
                required
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
                readOnly
                required
                defaultValue={user?.email}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24 w-full"
                name="review"
                required
                placeholder="Your Message Here"
              ></textarea>
            </div>
            <input
              type="submit"
              className="btn btn-outline btn-warning my-5 w-96 "
              value="Review"
            />
          </form>
        ) : (
          <>
            Please Login To Add A Review &nbsp;
            <Link className="link link-error" to="/login">
              {" "}
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceDetailsReview;
