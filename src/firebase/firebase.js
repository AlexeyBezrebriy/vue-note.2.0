import { initializeApp } from "firebase/app"
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore"
import { getDatabase, ref, set, onValue } from "firebase/database"

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
// export const db = getFirestore(firebaseApp)
// const notesColRef = collection(db, "notes")
// export default notesColRef

export function writeNoteData(noteId, title, date) {
  set(ref(db, "notes/" + noteId), {
    title: title,
    date: date,
  })
}

export async function getNotesData() {
  const notes = []
  await onValue(
    dbRef,
    (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        notes.push({
          id: childSnapshot.key,
          title: childSnapshot.val().title,
        })
        // console.log(notes)
      })
    },
    {
      onlyOnce: true,
    }
  )
  return notes
}
// export async function addData(note) {
//   try {
//     const docRef = await addDoc(notesColRef, {
//       title: note.title,
//       date: Date(),
//     })
//     console.log("Document written with ID: ", docRef.id)
//   } catch (e) {
//     console.error("Error adding document: ", e)
//   }
// }

// export async function getData() {
//   const querySnapshot = await getDocs(notesColRef)
//   let notes = []
//   querySnapshot.forEach((doc) => {
//     let noteData = doc.data()
//     noteData.id = doc.id
//     notes.push(noteData)
//   })
//   return notes
// }
