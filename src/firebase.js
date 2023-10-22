// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyByBBJKY_HZ7dHfzVenFZeYgcla4O_ONRQ",
    authDomain: "blog-react-firebase-bbbf4.firebaseapp.com",
    projectId: "blog-react-firebase-bbbf4",
    storageBucket: "blog-react-firebase-bbbf4.appspot.com",
    messagingSenderId: "1096969013544",
    appId: "1:1096969013544:web:331d2387c97961f457a81d",
    measurementId: "G-Y4WF8S0QC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };