// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA952pmoBs38lXbbPouaCoqYx_52zv8TSU",
  authDomain: "fir-98019.firebaseapp.com",
  projectId: "fir-98019",
  storageBucket: "fir-98019.firebasestorage.app",
  messagingSenderId: "120682403122",
  appId: "1:120682403122:web:44e7bd85770be8a870f32b",
  measurementId: "G-TZJEZCSYWC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
export default app;
