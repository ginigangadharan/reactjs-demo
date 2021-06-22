import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// here to import seed file - only once !!!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyA_ktJXfJmpIX60aH83xD7UPxzFErGyNws',
  authDomain: 'instagram-clone-db15e.firebaseapp.com',
  projectId: 'instagram-clone-db15e',
  storageBucket: 'instagram-clone-db15e.appspot.com',
  messagingSenderId: '353616401320',
  appId: '1:353616401320:web:0e8ebebfb2ff53a9b2039d'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

console.log('firebase', firebase);

// only once !
// seedDatabase(firebase);

export { firebase, FieldValue };
