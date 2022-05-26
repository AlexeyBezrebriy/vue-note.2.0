<template>
  <div>
    <h2>Note application</h2>

    <hr />
    <AddNote @add-note="addNote" />

    <hr />
    <Loader v-if="loading" />
    <NoteList
      v-else-if="notes.length"
      v-bind:notes="notes"
      @remove-notes="removeNote"
    />
    <p v-else>No notes!</p>
  </div>
</template>

<script>
  import NoteList from "@/components/NoteList"
  import AddNote from "@/components/AddNote"
  import Loader from "@/components/Loader"
  import notesColRef from "../firebase/firebase.js"
  import {
    db,
    dbRef,
    getNotesData,
    writeNoteData,
    removeNoteData,
  } from "../firebase/firebase.js"
  import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore"
  import { getDatabase, ref, set, onValue } from "firebase/database"

  export default {
    name: "app",
    data() {
      return {
        notes: [],
        loading: true,
      }
    },
    mounted() {
      // getData()
      // getNotesData().then((result) => {
      //   console.log(result)
      //   this.notes = result
      //   this.loading = false
      //   console.log(this.notes)
      // })
      //   //----------------------------!------
      // let examplePromise = new Promise(function (resolve, reject) {
      //   const notes = []
      //   onValue(
      //     dbRef,
      //     (snapshot) => {
      //       snapshot.forEach((childSnapshot) => {
      //         notes.push({
      //           id: childSnapshot.key,
      //           title: childSnapshot.val().title,
      //         })
      //         // console.log(notes)
      //       })
      //     },
      //     {
      //       onlyOnce: true,
      //     }
      //   )
      //   resolve(notes)
      // }).then((result) => {
      //   console.log(result)
      //   this.notes = result
      //   this.loading = false
      // })
      // Promise.resolve(getNotesData()).then((result) => {
      //   this.notes = result
      //   this.loading = false
      // })
      //   fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
      //     .then((response) => response.json())
      //     .then((json) => {
      //       this.notes = json
      //       this.loading = false
      //       console.log(json, "json")
      //       console.log(this.notes)
      //     })
    },

    methods: {
      async removeNote(id) {
        console.log(id)
        console.log(this.notes)
        await removeNoteData(id)
        this.notes = this.notes.filter((t) => t.id !== id)
      },

      // async addNote(note) {
      //   set(ref(db, "notes/" + note.id), {
      //     title: note.title,
      //     date: Date(),
      //   })
      // },
      async addNote(note) {
        await writeNoteData(note.id, note.title, note.date)
        this.notes.push(note)
      },

      async fetchNotes() {
        const notes = []
        await onValue(
          dbRef,
          (snapshot) => {
            snapshot.forEach((childSnapshot) => {
              this.notes.push({
                id: childSnapshot.key,
                title: childSnapshot.val().title,
                date: childSnapshot.val().date,
              })
              this.loading = false
            })
          },
          {
            onlyOnce: true,
          }
        )
      },
      // async addNote(note) {
      //   try {
      //     const docRef = await addDoc(notesColRef, {
      //       title: note.title,
      //       date: note.date,
      //     })
      //     note.id = docRef.id
      //     console.log(note)
      //     console.log("Document written with ID: ", docRef.id)
      //   } catch (e) {
      //     console.error("Error adding document: ", e)
      //   }
      // },

      // async fetchNotes() {
      //   const querySnapshot = await getDocs(notesColRef)
      //   let notes = []
      //   querySnapshot.forEach((doc) => {
      //     let noteData = doc.data()
      //     noteData.id = doc.id
      //     notes.push(noteData)
      //     console.log(notes)
      //   })
      //   this.notes = notes
      //   this.loading = false
      // },
    },
    created() {
      this.fetchNotes()
    },
    components: {
      NoteList,
      AddNote,
      Loader,
    },
  }
</script>
