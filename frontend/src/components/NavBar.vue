<script>
export default {
  name: "NavBar"
}
</script>

<template>
  <div class="nav-bar">
    <router-link class="nav-brand" to="/Home">
      <span class="text-light">
      <span class="text-danger text-">SORAYA</span>LICIA
    </span>
    </router-link>
    <router-link class="navbar-item" to="/Gallery">Gallery</router-link>
    <router-link class="navbar-item" to="/About">About</router-link>
    <router-link class="navbar-item" to="/Contact">Contact</router-link>
  </div>
</template>

<style scoped>
.nav-bar {
  display: flex;
  align-items: center;
  background-color: transparent;
}

.nav-brand {
  margin-left: 2vw;
  margin-right: auto;
}

span {
  font-weight: bold;
  font-size: calc(0.8rem + 0.5vw);
}

.navbar-item {
  color: black;
  font-family: var(--classy-font);
  text-decoration: none;
  list-style: none;
  padding: 10px 20px;
  letter-spacing: 0.2vw;
  font-weight: normal;
  font-size: calc(0.8rem + 0.5vw);
}

.navbar-item:hover {
  color: white;
  cursor: pointer;
}
</style>