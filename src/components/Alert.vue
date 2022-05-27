<template>
  <div class="alert-wrapper">
    <div class="alert">You must enter a value for the note</div>
  </div>
</template>

<style>
  .alert-wrapper {
    position: fixed;
    width: 100%;
    top: 20px;
  }
  .alert {
    padding: 20px;
    color: white;
    background: #ff0000;
    border-radius: 10px;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
    max-width: 400px;
    margin: 0 auto;
  }
</style>
