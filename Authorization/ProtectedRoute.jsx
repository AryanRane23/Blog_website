import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
//import Loader from "../stylers/Loading";
const ProtectedRoute = ({ children, ...rest }, { darkMode, setDarkMode }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (!currentUser) {
        navigate("/signin"); // Redirect to sign-in if not authenticated
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, [navigate]);

  if (loading) {
    return (
      <div>Loading...</div>
    );
  }

  if (!user) {
    return null; // Redirect handles navigation
  }

  // Ensure children is a single element and pass down ...rest props
  if (React.Children.count(children) !== 1) {
    throw new Error("ProtectedRoute expects a single child element.");
  }

  return React.cloneElement(children, { ...rest });
};

export default ProtectedRoute;