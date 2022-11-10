import React from "react";

const JsVsNodeJs = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <caption className="text-3xl font-bold p-3 text-slate-400">
          Javascript VS NodeJS
        </caption>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Javascript</th>
            <th>NodeJS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>
              <p>
                Javascript is a programming language that is used for <br />{" "}
                writing scripts on the website.&nbsp;
                <br />
                &nbsp;
              </p>
              <p>&nbsp;</p>
            </td>
            <td>NodeJS is a Javascript runtime environment.</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>Javascript can only be run in the browsers.</td>
            <td>
              We can run Javascript outside the browser with the help of NodeJS.
            </td>
          </tr>
          <tr>
            <td>3.</td>
            <td>It is basically used on the client-side.</td>
            <td>It is mostly used on the server-side.</td>
          </tr>
          <tr>
            <td>4.</td>
            <td>
              Javascript is capable enough to add HTML and play with the
              DOM.&nbsp;
              <br />
              &nbsp;
            </td>
            <td>Nodejs does not have capability to add HTML tags.</td>
          </tr>
          <tr>
            <td>5.</td>
            <td>
              Javascript can run in any browser engine <br /> as like JS core in
              safari and Spidermonkey in Firefox.&nbsp;
              <br />
              &nbsp;
            </td>
            <td>
              V8 is the Javascript engine inside of node.js that parses and runs
              Javascript.&nbsp;
            </td>
          </tr>
          <tr>
            <td>6.</td>
            <td>Javascript is used in frontend development.</td>
            <td>Nodejs is used in server-side development.</td>
          </tr>
          <tr>
            <td>7.</td>
            <td>
              Some of the javascript frameworks are RamdaJS, TypedJS, etc.&nbsp;
              <br />
              &nbsp;
            </td>
            <td>
              Some of the Nodejs modules are Lodash, express etc. <br /> These
              modules are to be imported from npm.&nbsp;
              <br />
              &nbsp;
            </td>
          </tr>
          <tr>
            <td>8.</td>
            <td>
              It is the upgraded version of ECMA script that uses <br />{" "}
              Chrome’s V8 engine written in C++.&nbsp;
              <br />
              &nbsp;
            </td>
            <td>Nodejs is written in C, C++ and Javascript.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default JsVsNodeJs;
