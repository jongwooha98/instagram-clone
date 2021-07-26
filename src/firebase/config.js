// import * as firebase from 'firebase/app';
import firebase from 'firebase/app';
import 'firebase/storage'; //store our images
import 'firebase/firestore'; //database

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCgLXs9Ams9fza-kwtWGIJ7a6piLXewO6c',
  authDomain: 'photo-gallery-f68a7.firebaseapp.com',
  projectId: 'photo-gallery-f68a7',
  storageBucket: 'photo-gallery-f68a7.appspot.com',
  messagingSenderId: '213063268655',
  appId: '1:213063268655:web:22d4da2993e2a52f36c9da',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize storage, firestore services
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
