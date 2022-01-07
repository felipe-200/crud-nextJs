import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: "crud-next-43405.appspot.com",
  // messagingSenderId: "102367925444",
  // appId: "1:102367925444:web:02ab77f4c937d022ece591"
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase)

export default db