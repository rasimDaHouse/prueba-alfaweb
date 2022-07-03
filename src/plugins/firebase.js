import Firebase from 'firebase';

Firebase.initializeApp({
  apiKey: "AIzaSyAs16e3OGCSon0FE2j_S8wMACu19YKYsQ8",
  authDomain: "prueba-alfaweb-25761.firebaseapp.com",
  projectId: "prueba-alfaweb-25761",
  storageBucket: "prueba-alfaweb-25761.appspot.com",
  messagingSenderId: "875854769500",
  appId: "1:875854769500:web:6e7b69bf2a65a541a02599",
  measurementId: "G-JCBL3JBMVJ"
});

export const DB = Firebase.firestore();
