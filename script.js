// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCQLIQhOsPZqT3FjHMZ1M76faPA4pbVYS4",
  authDomain: "fastx-courier.firebaseapp.com",
  projectId: "fastx-courier",
  storageBucket: "fastx-courier.firebasestorage.app",
  messagingSenderId: "520523714412",
  appId: "1:520523714412:web:87f2e0593433476b8ced49",
  measurementId: "G-G4QSN3MN7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("Firebase connected successfully");
