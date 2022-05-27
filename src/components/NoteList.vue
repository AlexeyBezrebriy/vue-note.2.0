<template>
  <div class="notes">
    <transition-group tag="ul" name="list">
      <!-- <ul> -->
      <NoteItem
        v-for="(note, i) of notes"
        v-bind:note="note"
        v-bind:index="i"
        v-on:remove-note="removeNote"
        :key="note.id"
      />
      <!-- </ul> -->
    </transition-group>
  </div>
</template>

<script>
  import NoteItem from "@/components/NoteItem"
  export default {
    props: ["notes"],
    components: {
      NoteItem,
    },
    methods: {
      removeNote(id) {
        this.$emit("remove-notes", id)
      },
    },
  }
</script>

<style scoped>
  .notes {
    margin: 20px auto;
    position: relative;
  }

  .notes ul {
    position: relative;
    padding: 0;
  }

  .list-enter-from {
    opacity: 0;
    transform: scale(0.6);
  }
  .list-enter-to {
    opacity: 1;
    transform: scale(1);
  }
  .list-enter-active {
    transition: all 0.4s ease;
  }
  .list-leave-from {
    opacity: 1;
    transform: scale(1);
  }
  .list-leave-to {
    opacity: 0;
    transform: scale(0.6);
  }
  .list-leave-active {
    transition: all 0.4s ease;
  }
</style>
