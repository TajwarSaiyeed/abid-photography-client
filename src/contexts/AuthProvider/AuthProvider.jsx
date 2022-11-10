import React, { createContext, useEffect, useState } from "react";
import { app } from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userphotourl, setUserphotourl] = useState(null);

  const googleLoginSignin = (Provider) => {
    setLoading(true);
    return signInWithPopup(auth, Provider);
  };
  const createUserWithEmailPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const update = (updateUser) => {
    return updateProfile(auth.currentUser, updateUser);
  };
  const loginUserWIthEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      try {
        if (currentUser === null || currentUser) {
          setUser(currentUser);
        }
      } finally {
        setLoading(false);
      }
    });

    return () => {
      unsub();
    };
  }, [loading]);

  const authInfo = {
    user,
    loading,
    setLoading,
    googleLoginSignin,
    createUserWithEmailPassword,
    update,
    loginUserWIthEmailPassword,
    logOut,
    userphotourl,
    setUserphotourl,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
