import { createContext, useState, useEffect, useContext } from "react";
import { auth, db } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthContextProvidor = ({ children }) => {
  const [user, setUser] = useState({});

  //signup function
  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "users", email), {
      playList: [],
    });
  }

  //singin function
  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  //logout function
  function logOut() {
    return signOut(auth);
  }

  //function to run on every render
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ signUp, signIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useUserAuth() {
  return useContext(AuthContext);
}
