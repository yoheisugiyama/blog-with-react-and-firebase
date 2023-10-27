// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-jnByzaSa1E1FcoK52nh4-dnB45wGhE8",
    authDomain: "blog-with-react-95b44.firebaseapp.com",
    projectId: "blog-with-react-95b44",
    storageBucket: "blog-with-react-95b44.appspot.com",
    messagingSenderId: "858002533953",
    appId: "1:858002533953:web:47cd05ee56461dac7320c0"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export { auth, provider, db }