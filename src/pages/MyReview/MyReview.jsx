import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const MyReview = () => {
  const [myreviews, setMyreviews] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/myreview?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyreviews(data));
  }, [user?.email]);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 my-5">
      {myreviews.map((myreview) => (
        <div
          key={myreview._id}
          className="card max-w-96 bg-base-100 shadow-xl image-full"
        >
          <figure>
            <img className="w-full" src={myreview.servicePicture} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{myreview.serviceTitle}</h2>
            <p>{myreview.reviewMessage}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyReview;
