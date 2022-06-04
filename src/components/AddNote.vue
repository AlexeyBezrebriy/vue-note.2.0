<template>
  <form @submit.prevent="onSubmit">
    <div class="form-group">
      <input
        class="form-control"
        type="text"
        v-model="title"
        placeholder="Enter the text of note"
      />
    </div>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        title: "",
      }
    },
    methods: {
      onSubmit() {
        if (this.title.trim()) {
          const newNote = {
            id: Date.now(),
            title: this.title,
            date: new Date().toJSON(),
          }
          this.$emit("add-note", newNote)
          this.title = ""
        } else {
          this.$emit("badValue")
        }
      },
    },
  }
</script>

<style scoped>
  div {
    display: flex;
    flex-wrap: wrap;
  }

  input {
    max-width: 600px;
    min-width: 310px;
    display: inline-block;
    margin: 1rem;
    margin-bottom: 0;
  }
</style>
