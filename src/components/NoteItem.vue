<template>
  <li>
    <span class="text">
      <strong>{{ index + 1 }}.</strong>
      <strong>{{ note.title }}</strong>
      <span class="date">
        <i>
          <small>{{ note.date }}</small>
        </i>
      </span>
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
  i {
    padding-left: 10px;
  }
  span {
    margin-right: 1rem;
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
