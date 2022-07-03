import Firebase from 'firebase';

Firebase.initializeApp({
  apiKey: 'AIzaSyB_UOoK0SiDPi3KliHcev2QZR54vvkR0gU',
  authDomain: 'prueba-vuejs-5b88d.firebaseapp.com',
  projectId: 'prueba-vuejs-5b88d',
  storageBucket: 'prueba-vuejs-5b88d.appspot.com',
  messagingSenderId: '347240117425',
  appId: '1:347240117425:web:ce25666bc299f57976de90',
});

export const DB = Firebase.firestore();
