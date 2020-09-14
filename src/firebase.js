import firebase from 'firebase';
import { firebaseConfig } from './firebaseConfig';

const fireBaseApp = firebase.initializeApp(firebaseConfig);

const db = fireBaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
