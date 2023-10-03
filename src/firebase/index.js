import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCVBY-KesOi-JeJGmLJNDIuhsemXOsZqEk",
  authDomain: "pet-project-c506c.firebaseapp.com",
  projectId: "pet-project-c506c",
  storageBucket: "pet-project-c506c.appspot.com",
  messagingSenderId: "72062101010",
  appId: "1:72062101010:web:baa6e0b89be02ff00fdacb"
})

export const auth = getAuth(firebaseApp)
export const dataBase = getFirestore(firebaseApp)

