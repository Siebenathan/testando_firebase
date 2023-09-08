// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB7sBWfBvJV6D2DSh2EuBK___P5jt90znM',
  authDomain: 'damp-2023-2.firebaseapp.com',
  projectId: 'damp-2023-2',
  storageBucket: 'damp-2023-2.appspot.com',
  messagingSenderId: '235792165794',
  appId: '1:235792165794:web:fb385cb799ee07b4e4e0fb',
  measurementId: 'G-ZSP8C3NS04',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
