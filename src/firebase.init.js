// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHpTN4at1oSq4hwh3SrWNDE81AyoK1_bU",
    authDomain: "fir-with-reacter-router.firebaseapp.com",
    projectId: "fir-with-reacter-router",
    storageBucket: "fir-with-reacter-router.appspot.com",
    messagingSenderId: "879386821253",
    appId: "1:879386821253:web:434e29f96b5557f8225fec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;