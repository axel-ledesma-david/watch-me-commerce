import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ6U-xu7hnDTRL3PDKnrD3Ro7TRkr51Xg",
  authDomain: "watch-me-6be5d.firebaseapp.com",
  projectId: "watch-me-6be5d",
  storageBucket: "watch-me-6be5d.appspot.com",
  messagingSenderId: "719887206816",
  appId: "1:719887206816:web:079c0bb16be8e058b0bcc5"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
