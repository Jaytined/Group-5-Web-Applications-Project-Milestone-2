// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVB0Q5UAW1slWQ6UDtv1xzmgyqzCNg0G8",
  authDomain: "group5-15298.firebaseapp.com",
  projectId: "group5-15298",
  storageBucket: "group5-15298.appspot.com",
  messagingSenderId: "829303052615",
  appId: "1:829303052615:web:c16a8d6ba380f7fcde1462"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;