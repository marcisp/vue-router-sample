import firebase from 'firebase'
import 'firebase/firestore'

import firebaseConfig from './firebase.config';

console.log(firebaseConfig)
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore through Firebase
export const db = firebase.firestore();

