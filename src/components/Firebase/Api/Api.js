import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsXPnfaDVwdpctWxEBH93ybwwDB9HA82I",
  authDomain: "react-login-page-83154.firebaseapp.com",
  projectId: "react-login-page-83154",
  storageBucket: "react-login-page-83154.appspot.com",
  messagingSenderId: "928401938241",
  appId: "1:928401938241:web:7ef1bad03ed06cd7bef3c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };