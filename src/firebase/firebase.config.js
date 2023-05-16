// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYtuMQaj0k4HN5RdKHgf9XESxB51o0VX0",
  authDomain: "ema-john-firebase-auth-7c45a.firebaseapp.com",
  projectId: "ema-john-firebase-auth-7c45a",
  storageBucket: "ema-john-firebase-auth-7c45a.appspot.com",
  messagingSenderId: "1080739186393",
  appId: "1:1080739186393:web:cd560062b2bc0633df60c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;