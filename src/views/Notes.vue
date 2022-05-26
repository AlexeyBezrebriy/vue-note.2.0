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
  import { dbRef, writeNoteData, removeNoteData } from "../firebase/firebase.js"
  import { onValue } from "firebase/database"

  export default {
    name: "app",
    data() {
      return {
        notes: [],
        loading: true,
      }
    },

    methods: {
      async removeNote(id) {
        console.log(id)
        console.log(this.notes)
        await removeNoteData(id)
        this.notes = this.notes.filter((t) => t.id !== id)
      },

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
