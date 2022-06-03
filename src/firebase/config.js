import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCvKTX_B5Qgq3KH_u4qlKcSFIOlpm6OVfA",
  authDomain: "olx-app-1cc2c.firebaseapp.com",
  projectId: "olx-app-1cc2c",
  storageBucket: "olx-app-1cc2c.appspot.com",
  messagingSenderId: "758996815946",
  appId: "1:758996815946:web:8cfc872f5ebb788cf816b3",
  measurementId: "G-WJG9YGZJHV"
  };

export const Firebase= firebase.initializeApp(firebaseConfig)//named export