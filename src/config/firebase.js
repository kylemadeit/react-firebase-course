import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCejUs94vKEcvn8DGpd1PduAVKh9S-Yxyw",
  authDomain: "fir-course-4fa62.firebaseapp.com",
  projectId: "fir-course-4fa62",
  storageBucket: "fir-course-4fa62.appspot.com",
  messagingSenderId: "220517787188",
  appId: "1:220517787188:web:72eb68eb7af90868600c61",
  measurementId: "G-1FLT4Z22V9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCejUs94vKEcvn8DGpd1PduAVKh9S-Yxyw",
//   authDomain: "fir-course-4fa62.firebaseapp.com",
//   projectId: "fir-course-4fa62",
//   storageBucket: "fir-course-4fa62.appspot.com",
//   messagingSenderId: "220517787188",
//   appId: "1:220517787188:web:72eb68eb7af90868600c61",
//   measurementId: "G-1FLT4Z22V9"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);