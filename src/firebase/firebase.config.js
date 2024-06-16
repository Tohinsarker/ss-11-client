// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNkHb9a32jSvY1Hf6UxpobhxWruqNMv7g",
  authDomain: "fir-demo-ced05.firebaseapp.com",
  projectId: "fir-demo-ced05",
  storageBucket: "fir-demo-ced05.appspot.com",
  messagingSenderId: "147159732097",
  appId: "1:147159732097:web:ea6581636fd1d16dc1e280"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;