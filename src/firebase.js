// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiKeQ0DnQGbZDO4_TxbHGn0b7y5lv7LqE",
  authDomain: "chat-197d8.firebaseapp.com",
  databaseURL:
    " https://chat-197d8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-197d8",
  storageBucket: "chat-197d8.appspot.com",
  messagingSenderId: "505907196557",
  appId: "1:505907196557:web:e17fecd5398d78fb97a8c4",
  measurementId: "G-NN28ZTWWZS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database, ref, push, onValue}
