// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const  {REACT_APP_API_KEY,REACT_APP_API_ID} = process.env
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${REACT_APP_API_KEY}`,
  authDomain: "warehouse-management-3faee.firebaseapp.com",
  projectId: "warehouse-management-3faee",
  storageBucket: "warehouse-management-3faee.appspot.com",
  messagingSenderId: "827746303372",
  appId: `${REACT_APP_API_ID}`
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);

export default auth;