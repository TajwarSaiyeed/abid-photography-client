import React from "react";

const JWT = () => {
  return (
    <div className="bg-slate-100 p-5 my-3 rounded-xl">
      <h1 className="text-3xl font-bold text-gray-800">What is JWT?</h1>
      <p>
        JWT, or JSON Web Token, is an open standard used to share security
        information between two parties — a client and a server. Each JWT
        contains encoded JSON objects, including a set of claims. JWTs are
        signed using a cryptographic algorithm to ensure that the claims cannot
        be altered after the token is issued.
      </p>
      <h1 className="text-3xl font-bold text-gray-800">How JWT Works</h1>
      <p>
        JWTs differ from other web tokens in that they contain a set of claims.
        Claims are used to transmit information between two parties. What these
        claims are depends on the use case at hand. For example, a claim may
        assert who issued the token, how long it is valid for, or what
        permissions the client has been granted.
      </p>
      <p>
        A JWT is a string made up of three parts, separated by dots (.), and
        serialized using base64. In the most common serialization format,
        compact serialization, the JWT looks something like this:
        xxxxx.yyyyy.zzzzz.
      </p>
      <p>Once decoded, you will get two JSON strings:</p>
      <ol>
        <li>
          The <strong>header </strong>and the <strong>payload.</strong>
        </li>
        <li>
          The <strong>signature.</strong>&nbsp;
        </li>
      </ol>
      <p>
        The <strong>JOSE (JSON Object Signing and Encryption) header </strong>
        contains the type of token — JWT in this case — and the signing
        algorithm. &nbsp;
      </p>
      <p>
        The <strong>payload </strong>contains the claims. This is displayed as a
        JSON string, usually containing no more than a dozen fields to keep the
        JWT compact. This information is typically used by the server to verify
        that the user has permission to perform the action they are requesting.
      </p>
      <p>
        There are no mandatory claims for a JWT, but overlaying standards may
        make claims mandatory. For example, when using JWT as bearer access
        token under OAuth2.0, iss, sub, aud, and exp must be present. some are
        more common than others.&nbsp;
      </p>
      <p>
        The <strong>signature </strong>ensures that the token hasn’t been
        altered. The party that creates the JWT signs the header and payload
        with a secret that is known to both the issuer and receiver, or with a
        private key known only to the sender. When the token is used, the
        receiving party verifies that the header and payload match the
        signature.&nbsp;
      </p>
    </div>
  );
};

export default JWT;
