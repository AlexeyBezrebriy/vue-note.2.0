<template>
  <li>
    <span>
      <strong>{{ index + 1 }}</strong>
      {{ note.title }}
    </span>
    <button class="btn btn-primary" v-on:click="$emit('remove-note', note.id)">
      &times;
    </button>
  </li>
</template>

<script>
  export default {
    props: {
      note: {
        type: Object,
        required: true,
      },
      index: Number,
    },
  }
</script>

<style scoped>
  li {
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 2rem;
    margin-bottom: 1rem;
  }

  input {
    margin-right: 1rem;
  }
</style>
