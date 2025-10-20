import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2RFLxZJEhYaiFlmjGPCbuRwwacQn4M08",
  authDomain: "gricollegeproject.firebaseapp.com",
  projectId: "gricollegeproject",
  storageBucket: "gricollegeproject.appspot.com",
  messagingSenderId: "826967693375",
  appId: "1:826967693375:web:7014d8dbc7bfe482b7808a",
  measurementId: "G-7Q4MM3MNLK"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Enable offline persistence
enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === 'failed-precondition') {
    console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.');
  } else if (err.code === 'unimplemented') {
    console.warn('The current browser does not support offline persistence.');
  }
});
