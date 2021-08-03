// import * as firebase from 'firebase/app';
import firebase from 'firebase/app';
import 'firebase/storage'; //store our images
import 'firebase/firestore'; //database

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyA-fXseo0uFwFFo72nRIl-2rH2JxQccr44',
  authDomain: 'photo-gallery-4caa0.firebaseapp.com',
  projectId: 'photo-gallery-4caa0',
  storageBucket: 'photo-gallery-4caa0.appspot.com',
  messagingSenderId: '4343727597',
  appId: '1:4343727597:web:4a0f8fd47ec8234ca593e4',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize storage, firestore services
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
