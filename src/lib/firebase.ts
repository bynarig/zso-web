// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";

// Tuto KONFIGURACI MUSÍTE NAHRADIT VAŠIMI SKUTEČNÝMI ÚDAJI
const firebaseConfig = {
  apiKey: "AIzaSyB1b8hhFd4pzD0XyaNRBFt8dAJpjFY_i3g",

  authDomain: "seznamka-web.firebaseapp.com",

  projectId: "seznamka-web",

  storageBucket: "seznamka-web.firebasestorage.app",

  messagingSenderId: "405180518392",

  appId: "1:405180518392:web:5c0ff358d9a2c791fbd00d",

  measurementId: "G-S709NBMVQ4"

};
const app = initializeApp(firebaseConfig);

// Export databáze
export const db = getFirestore(app);
const analytics = getAnalytics(app);