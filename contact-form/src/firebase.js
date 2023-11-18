import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseApp = firebase.initializeApp({
   
  apiKey: "AIzaSyBEbDTIOX_Vec_lPbk3oohVNwGeKCJNefg",
    authDomain: "contact-form-portfolio-website.firebaseapp.com",
    projectId: "contact-form-portfolio-website",
    storageBucket: "contact-form-portfolio-website.appspot.com",
    messagingSenderId: "401418913738",
    appId: "1:401418913738:web:3a8174966819f6c0787133",
    measurementId: "G-QRDMBT00ED"
  

}) 

var db = firebaseApp.firestore();

export { db };