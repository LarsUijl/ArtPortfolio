<script>
export default {
  name: "Gallery",
  created() {

  }
}
</script>

<template>
<div class="gallery">
  <div class="gallery-navigation text-center">
    <p class="gallery-title display-5">Gallery</p>
    <ul class="d-flex justify-content-center">
      <li class="gallery-item display-6">
        <router-link to="/paintings">Paintings</router-link>
      </li>
      <li class="gallery-item display-6">
        <router-link to="/photography">Photography</router-link>
      </li>
      <li class="gallery-item display-6">
        <router-link to="/sketches">Sketches</router-link>
      </li>
      <li class="gallery-item display-6">
        <router-link to="/music">Music</router-link>
      </li>
    </ul>
  </div>
  <router-view></router-view>
</div>
</template>

<style scoped>
  .gallery-item {
    color: black;
    font-family: var(--classy-font);
    text-decoration: none;
    list-style: none;
    padding: 10px 20px;
    letter-spacing: 0.5vw;
    font-weight: normal;
  }

  .gallery-title {
    font-family: var(--classy-font);
    font-weight: bold;
    letter-spacing: 0.2vw;
    margin: 20px 0;
  }

  .gallery-item:hover {
    color: white;
    cursor: pointer;
    a {
      color: white;
    }
  }

  .selected-gallery-item {
    background-color: grey
  }

  a {
    color: black;
  }
</style>