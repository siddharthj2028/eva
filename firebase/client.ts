// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXgCaFm4lEpWELqF2k2qzl26pj0smWhmU",
    authDomain: "evaproject-65bd1.firebaseapp.com",
    projectId: "evaproject-65bd1",
    storageBucket: "evaproject-65bd1.firebasestorage.app",
    messagingSenderId: "49938853030",
    appId: "1:49938853030:web:b666086b1b8c838a891867",
    measurementId: "G-VPDWZ324D8"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)