import { initializeApp } from "firebase/app"
import { getDatabase, ref, set, onValue, update } from "firebase/database"

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

export const db = getDatabase(firebaseApp)
export const dbRef = ref(db, "notes")

export function writeNoteData(noteId, title, date) {
  set(ref(db, "notes/" + noteId), {
    title: title,
    date: date,
  })
}

export function removeNoteData(id) {
  const updates = {}
  updates["notes/" + id] = null

  return update(ref(db), updates)
}
