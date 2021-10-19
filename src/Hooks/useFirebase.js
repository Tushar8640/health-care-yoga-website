import firebaseAuthenticaton from "../Firebase/firebase.init";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";

firebaseAuthenticaton();
const useFirebase = () => {
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider) 
  };

  const loginWithEmailPass = () => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const registration = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        // setUser(result.user);
        updateName();
        // setUser([]);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };

  const updateName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        setError(error.message);
        // An error occurred
        // ...
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser([]);
        window.location.reload(false)
        // Sign-out successful.
      })
      .catch((error) => {
        setError(error.message);
        // An error happened.
      });
    
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("Sign Out");
        // User is signed out
        // ...
      }
    });
  }, []);
  return {
    user,
    loginWithGoogle,
    logOut,
    setEmail,
    setPassword,
    registration,
    setUser,
    setName,
    loginWithEmailPass,
    setError,
    error,
  };
};

export default useFirebase;
