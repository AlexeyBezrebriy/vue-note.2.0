<template>
  <div>
    <nav class="navbar navbar-dark navbar-expand-lg bg-success">
      <div class="navbar-brand">Vue-Note</div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/">Notes</router-link>
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
  @media only screen and (max-width: 992px) {
    .navbar {
      justify-content: start;
    }
    .navbar-nav {
      flex-direction: row;
    }
    .nav-item {
      padding: 0px 8px;
    }
  }
</style>
