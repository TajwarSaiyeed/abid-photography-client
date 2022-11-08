import React, { createContext, useEffect, useState } from "react";
import { app } from "../../firebase/firebase.config";
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleLoginSignin = (Provider) => {
    return signInWithPopup(auth, Provider);
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsub();
    };
  }, []);

  const authInfo = { user, loading, googleLoginSignin };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
