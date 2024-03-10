import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: 'AIzaSyC7mpVw7dngHToAGJHBMBIAJfcXfqMEdso',
  authDomain: 'hotelspot-dev.firebaseapp.com',
  databaseURL: 'https://hotelspot-dev-default-rtdb.firebaseio.com',
  projectId: 'hotelspot-dev',
  storageBucket: 'hotelspot-dev.appspot.com',
  messagingSenderId: '837005206471',
  appId: '1:837005206471:web:387363620ab6f6687d2fe2',
  measurementId: 'G-J7HR53DFZY',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app);
