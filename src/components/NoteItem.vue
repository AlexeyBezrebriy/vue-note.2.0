<template>
  <li class="">
    <span class="text">
      <strong>{{ index + 1 }}.</strong>
      {{ note.title }}
    </span>
    <button
      class="btn btn-outline-danger btn-sm"
      v-on:click="$emit('remove-note', note.id)"
    >
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
  strong {
    padding-right: 5px;
  }
  input {
    margin-right: 1rem;
  }
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
