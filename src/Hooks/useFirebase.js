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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const loginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        console.log(errorCode);

        // ...
      });
  };
  const loginWithEmailPass = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        setUser(result.user);
        console.log("successfully Log in")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const registration = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        // setUser(result.user);
        updateName()
        setUser([])
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  const updateName = () => {
    updateProfile(auth.currentUser, {
      displayName:  name
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        console.log(error.message);
        // An error occurred
        // ...
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
    setUser([]);
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

    setName,
    loginWithEmailPass,
  };
};

export default useFirebase;
