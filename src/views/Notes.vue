<template>
  <div>
    <!-- <h2>Note application</h2> -->
    <transition name="alert">
      <Alert v-if="showAlert" />
    </transition>
    <!-- <hr /> -->
    <AddNote @add-note="addNote" @badValue="triggerAlert" />

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
  import Alert from "@/components/Alert"
  import { dbRef, writeNoteData, removeNoteData } from "../firebase/firebase.js"
  import { onValue } from "firebase/database"
  import { ref } from "vue"

  export default {
    name: "app",
    setup() {
      const showAlert = ref(false)
      const triggerAlert = () => {
        showAlert.value = true
        setTimeout(() => (showAlert.value = false), 3000)
      }
      return { showAlert, triggerAlert }
    },
    data() {
      return {
        notes: [],
        loading: true,
      }
    },

    methods: {
      async removeNote(id) {
        await removeNoteData(id)
        this.notes = this.notes.filter((t) => t.id !== id)
      },

      async addNote(note) {
        await writeNoteData(note.id, note.title, note.date)
        this.notes.push(note)
      },

      async fetchNotes() {
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
      Alert,
    },
  }
</script>

<style>
  /* enter transitions */
  .alert-enter-active {
    animation: wobble 0.5s ease;
  }
  /* leave transitions */
  .alert-leave-to {
    opacity: 0;
    transform: translateY(-60px);
  }
  .alert-leave-active {
    transition: all 0.3s ease;
  }
  @keyframes wobble {
    0% {
      transform: translateY(-100px);
      opacity: 0;
    }
    50% {
      transform: translateY(0px);
      opacity: 1;
    }
    60% {
      transform: translateX(8px);
      opacity: 1;
    }
    70% {
      transform: translateX(-8px);
      opacity: 1;
    }
    80% {
      transform: translateX(4px);
      opacity: 1;
    }
    90% {
      transform: translateX(-4px);
      opacity: 1;
    }
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }
</style>
