<script>
export default {
  name: "NavBar"
}
</script>

<template>
  <div class="nav-bar justify-content-center" :class="{ 'nav-bar-bar': $route.path !== '/Home', 'position-fixed': $route.path === '/Home'}">
    <router-link v-if="$route.path !== '/Home'" class="nav-brand" to="/Home">
      <span class="text-light">
      <span class="text-danger">SORAYA</span>LICIA
    </span>
    </router-link>
    <router-link class="navbar-item" to="/Gallery">Gallery</router-link>
    <router-link class="navbar-item" to="/About">About</router-link>
    <router-link class="navbar-item" to="/Contact">Contact</router-link>
    <div class="socials">
      <a class="social-button" href="https://www.instagram.com/sorayalicia?igsh=NnpndXRwcmphbmps&utm_source=qr">
        <i class="fab fa-instagram"></i>
      </a>
    </div>
    <div class="socials">
      <a class="social-button" href="#">
        <i class="fab fa-tiktok"></i>
      </a>
    </div>
  </div>
</template>

<style scoped>
.nav-bar {
  width: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  position: absolute;
}

.nav-bar-bar {
  background-color: RGB(0,0,0, 0.4);
  z-index: 1;
}

.nav-brand {
  margin-left: 2vw;
  margin-right: auto;
  font-family: var(--brand-font);
  letter-spacing: 0.3vw;
}

span {
  font-weight: bold;
  font-size: calc(0.8rem + 0.5vw);
}

.navbar-item {
  color: black;
  font-family: var(--main-font);
  text-decoration: none;
  list-style: none;
  padding: 10px 20px 5px 20px;
  letter-spacing: 0.2vw;
  font-weight: normal;
  font-size: calc(1.1rem + 0.7vw);
}

.navbar-item:hover {
  color: #dc3545;
  cursor: pointer;
  transition: color 0.3s ease;
}

.socials {
  font-size: calc(1rem + 0.6vw);
  list-style: none;
  text-align: center;
  line-height: 50px;
}

a.social-button {
  color: black;
  transition: color 0.3s ease;
  padding: 10px 10px;
}

a.social-button:hover {
  color: #dc3545;
  cursor: pointer;
  transition: color 0.3s ease;
}

@media screen and (max-width: 950px) {
  .nav-bar {
    flex-wrap: wrap;
  }
}
</style>