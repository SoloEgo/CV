import firebase from "@/plugins/firebase"
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAD9E9LmUlr24KGpl2wi1-O7_3bsHpyigk",
    authDomain: "my-cv-5c75c.firebaseapp.com",
    projectId: "my-cv-5c75c",
    storageBucket: "my-cv-5c75c.appspot.com",
    messagingSenderId: "955630609230",
    appId: "1:955630609230:web:7eafa86a84ec596b92341f",
    measurementId: "G-CGS59R4011"
};

// Initialize Firebase
export const db = firebase.firestore()