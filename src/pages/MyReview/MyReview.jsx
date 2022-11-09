import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const MyReview = () => {
  const [myreviews, setMyreviews] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(
      `https://service-review-server-abid.vercel.app/myreview?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyreviews(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    fetch(`https://service-review-server-abid.vercel.app/myreview/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remainingReview = myreviews.filter(
            (myreview) => myreview._id !== id
          );
          setMyreviews(remainingReview);
          toast.success("Successfully Deleted");
        }
      });
  };
  return (
    <div
      className={`${
        myreviews.length > 0
          ? "lg:grid-cols-3"
          : "justify-items-center lg:grid-cols-1"
      } grid grid-cols-1 gap-3 my-5 `}
    >
      {myreviews.length > 0 ? (
        myreviews.map((myreview) => (
          <div
            key={myreview._id}
            className="card min-w-96 bg-base-100 shadow-xl image-full"
          >
            <figure>
              <img
                className="w-full"
                src={myreview.servicePicture}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{myreview.serviceTitle}</h2>
              <p>{myreview.reviewMessage}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                <button
                  onClick={() => handleDelete(myreview._id)}
                  className="btn btn-error btn-square"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center">
          <div className="bg-red-600 text-white p-3 text-center text-3xl font-bold rounded-lg">
            No reviews were added
          </div>
        </div>
      )}
    </div>
  );
};

export default MyReview;
