// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBZZZOY3z2_OVKvP-tS4Eu27Py-zO5wTgc",
  authDomain: "my-fb-crud.firebaseapp.com",
  databaseURL: "https://my-fb-crud.firebaseio.com",
  projectId: "my-fb-crud",
  storageBucket: "my-fb-crud.appspot.com",
  messagingSenderId: "773124027011",
  appId: "1:773124027011:web:8fe16c254e00965d0ee1b6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth();

export const firestore = firebase.firestore();

export const storage = firebase.storage();

export default firebase;
