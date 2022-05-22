<template>
  <div>
    <Navbar />
    <h2>Note application</h2>
    <router-link to="/">Home</router-link>
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
  import Navbar from "@/components/Navbar"
  import AddNote from "@/components/AddNote"
  import Loader from "@/components/Loader"
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
          }, 1000)
        })
    },

    methods: {
      removeNote(id) {
        this.notes = this.notes.filter((t) => t.id !== id)
      },
      addNote(note) {
        this.notes.push(note)
      },
    },
    components: {
      NoteList,
      AddNote,
      Loader,
      Navbar,
    },
  }
</script>
