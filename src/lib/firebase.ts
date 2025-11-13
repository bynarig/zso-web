// Firebase configuration for Seznamka app
import { initializeApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1b8hhFd4pzD0XyaNRBFt8dAJpjFY_i3g",
  authDomain: "seznamka-web.firebaseapp.com",
  projectId: "seznamka-web",
  storageBucket: "seznamka-web.firebasestorage.app",
  messagingSenderId: "405180518392",
  appId: "1:405180518392:web:5c0ff358d9a2c791fbd00d",
  measurementId: "G-S709NBMVQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (only on client side)
let analytics: Analytics | undefined;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, analytics };

