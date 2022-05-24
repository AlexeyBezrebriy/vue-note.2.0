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
  //import { db } from "../firebase/db.js"

  export default {
    name: "app",
    data() {
      return {
        notes: [],
        loading: true,
      }
    },
    mounted() {
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
        .then((response) => response.json())
        .then((json) => {
          setTimeout(() => {
            this.notes = json
            this.loading = false
          }, 10)
        })
    },

    methods: {
      removeNote(id) {
        this.notes = this.notes.filter((t) => t.id !== id)
      },
      // async addNote(note) {
      //   if (note) {
      //     await db.collection("notes").add({ title: note })
      //   }

      // },
      addNote(note) {
        this.notes.push(note)
      },
    },
    components: {
      NoteList,
      AddNote,
      Loader,
    },
  }
</script>
