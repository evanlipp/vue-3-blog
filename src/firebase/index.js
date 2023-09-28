import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyC1Og4L7g5q1HuK098sh6vtal-35X0e9XI',
  authDomain: 'task-tracker-sp.firebaseapp.com',
  projectId: 'task-tracker-sp',
  storageBucket: 'task-tracker-sp.appspot.com',
  messagingSenderId: '770983742362',
  appId: '1:770983742362:web:d54816421e0e286a06c823'
})

export const auth = getAuth(firebaseApp)


