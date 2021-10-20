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
  const [isLoading ,setIsloading] =useState(true)

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // google login 
  const loginWithGoogle = () => {
    setIsloading(true)
    return signInWithPopup(auth, googleProvider) 
  };

  // login with email and pass 
  const loginWithEmailPass = () => {
    setIsloading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // registration with email and pass 
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
        
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };

  // update display name 
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

  // handle log out 
  const logOut = () => {
    setIsloading(true)
    signOut(auth)
      .then(() => {
        setUser([]);
        window.location.reload(false)
        // Sign-out successful.
      })
      .catch((error) => {
        setError(error.message);
        // An error happened.
      })
      .finally(()=>setIsloading(false));
    
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
      setIsloading(false)
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
    setIsloading,
    isLoading
  };
};

export default useFirebase;
