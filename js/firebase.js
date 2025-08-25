// src/firebase.js  (CDN ESM version)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";

// Your config
const firebaseConfig = {
  apiKey: "AIzaSyB6oU46j84UMAo4O2NOIz5RaR04k_tgOY4",
  authDomain: "elevate-network-7bc45.firebaseapp.com",
  projectId: "elevate-network-7bc45",
  storageBucket: "elevate-network-7bc45.firebasestorage.app",
  messagingSenderId: "289310068826",
  appId: "1:289310068826:web:3ec935645e0a41af718863",
  measurementId: "G-J20CQ9W71R"
};

// Initialize
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { app, auth, db, analytics };
