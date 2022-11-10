import React from "react";

const NodeJs = () => {
  return (
    <div className="bg-slate-100 p-5 my-3 rounded-xl">
      <h1 className="text-3xl font-bold text-gray-800">
        How does NodeJS handle multiple requests at the same time?
      </h1>
      <p>
        NodeJS receives multiple client requests and places them into
        EventQueue. NodeJS is built with the concept of event-driven
        architecture. NodeJS has its own EventLoop which is an infinite loop
        that receives requests and processes them.
      </p>
    </div>
  );
};

export default NodeJs;
