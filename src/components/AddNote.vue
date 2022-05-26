<template>
  <form @submit.prevent="onSubmit">
    <div class="form-group">
      <input class="form-control" type="text" v-model="title" />
      <button class="btn btn-group-sm btn-success" type="submit">Create</button>
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
            date: Date(),
          }

          this.$emit("add-note", newNote)
          this.title = ""
        }
      },
    },
  }
</script>

<style scoped>
  form {
    display: flex;
  }

  input {
    max-width: 400px;
    min-width: 310px;
    display: inline-block;
    margin-left: 5px;
  }

  button {
    margin-left: 10px;
    margin-bottom: 2px;
  }
</style>
