import React from "react";
import JsVsNodeJs from "./JsVsNodeJs";
import JWT from "./JWT";
import NodeJs from "./NodeJs";
import NoSQLVSSQL from "./NoSQLVSSQL";

const Blogs = () => {
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
