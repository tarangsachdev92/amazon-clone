import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'xxxxx',
  authDomain: 'xxxx',
  databaseURL: 'xxxx',
  projectId: 'xxxx',
  storageBucket: 'xxxx',
  messagingSenderId: 'xxxx',
  appId: 'xxxx',
  measurementId: 'xxxx',
};

const fireBaseApp = firebase.initializeApp(firebaseConfig);

const db = fireBaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
