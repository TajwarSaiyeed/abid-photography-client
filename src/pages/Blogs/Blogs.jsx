import React from "react";
import useTitle from "../../hooks/useTitle";
import JsVsNodeJs from "./JsVsNodeJs";
import JWT from "./JWT";
import NodeJs from "./NodeJs";
import NoSQLVSSQL from "./NoSQLVSSQL";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div>
      <NoSQLVSSQL />
      <JWT />
      <JsVsNodeJs />
      <NodeJs />
    </div>
  );
};

export default Blogs;
