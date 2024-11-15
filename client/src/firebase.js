
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bikersportal-da07b.firebaseapp.com",
  projectId: "bikersportal-da07b",
  storageBucket: "bikersportal-da07b.firebasestorage.app",
  messagingSenderId: "195300700017",
  appId: "1:195300700017:web:ee6e302c1b8549271310d0"
};

 export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)