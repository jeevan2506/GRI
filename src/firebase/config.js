// Firebase configuration file
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZalUziqvB5T_SCWfE1paqYCiDzh6EnbY",
  authDomain: "gric-b3e54.firebaseapp.com",
  databaseURL: "https://gric-b3e54-default-rtdb.firebaseio.com",
  projectId: "gric-b3e54",
  storageBucket: "gric-b3e54.firebasestorage.app",
  messagingSenderId: "813574169225",
  appId: "1:813574169225:web:2efad06ead0f5ee0fbdc58",
  measurementId: "G-775J1023TG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { app, analytics, database };