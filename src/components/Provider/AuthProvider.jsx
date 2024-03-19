/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import { app } from "../../../firebase.config";
export const userContext = createContext(null);
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const GoogleProvider = new GoogleAuthProvider();
  //
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };

  const updateUserProfile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      //
      if (currentUser && currentUser.email) {
        axios
          .post("https://revenue-server.vercel.app/jwt", { email: currentUser.email })
          .then((data) => {
            localStorage.setItem("accessToken", data.data.token);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("accessToken");
      }
      //
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  const information = {
    user,
    loading,
    createUser,
    logInUser,
    updateUserProfile,
    googleSignIn,
    logOut,
  };
  return (
    <userContext.Provider value={information}>
      {/* */}
      {children}
    </userContext.Provider>
  );
};

export default AuthProvider;
