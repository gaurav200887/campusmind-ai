import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCebeGA88ZU1v6XVFo_t33c3uPniL2FEq4",
  authDomain: "campusmind-ai-f4268.firebaseapp.com",
  projectId: "campusmind-ai-f4268",
  storageBucket: "campusmind-ai-f4268.firebasestorage.app",
  messagingSenderId: "661311585463",
  appId: "1:661311585463:web:da32597652a4b299cc6132",
};

// Prevent multiple Firebase instances during hot reload
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Firebase Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;