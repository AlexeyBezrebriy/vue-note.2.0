import { initializeApp } from "firebase/app"
import { getFirestore, collection } from "firebase/firestore"

const firebaseApp = initializeApp({
  apiKey: "AIzaSyA12cURFLNkgOjAkbEqrDKHHfh3DQGDEXE",

  authDomain: "notesapp-dd025.firebaseapp.com",

  databaseURL:
    "https://notesapp-dd025-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "notesapp-dd025",

  storageBucket: "notesapp-dd025.appspot.com",

  messagingSenderId: "871142829363",

  appId: "1:871142829363:web:6d11e8af4cfe54413de246",
})

export const db = getFirestore(firebaseApp)
