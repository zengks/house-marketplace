// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrBl4lx27IbMZMUAOqlgIVunWX5q3KYpo",
  authDomain: "house-marketplace-app-6c592.firebaseapp.com",
  projectId: "house-marketplace-app-6c592",
  storageBucket: "house-marketplace-app-6c592.appspot.com",
  messagingSenderId: "196100394450",
  appId: "1:196100394450:web:d250f682b4b7bdcff84c0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()