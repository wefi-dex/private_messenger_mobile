import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.EXPO_PUBLIC_FIREBASE_REALTIME_DATABASEURL,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APPID,
  measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENTID
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;