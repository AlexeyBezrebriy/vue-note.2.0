<template>
  <div>
    <nav class="navbar navbar-dark navbar-expand-lg bg-success">
      <div class="navbar-brand">Vue-Note</div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/notes">Notes</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
  nav {
    padding-left: 4px;
    margin-right: -5px;
  }
</style>
