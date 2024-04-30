<script>
export default {
  name: "GalleryOverview",
  created() {

  },
  methods: {
    onClick(galleryName) {
      this.$router.push(this.$route.matched[0].path + '/' + galleryName);
    }
  }
}
</script>

<template>
  <div class="gallery">
    <div class="gallery-navigation text-center">
      <p class="gallery-title display-5">Gallery</p>
      <ul class="d-flex justify-content-center">
        <li class="gallery-item display-6" :class="{ 'selected-gallery-item': $route.path === '/Gallery/paintings' }">
          <a v-on:click="onClick('paintings')" to="/paintings">Paintings</a>
        </li>
        <li class="gallery-item display-6" :class="{ 'selected-gallery-item': $route.path === '/Gallery/photography' }">
          <a v-on:click="onClick('photography')" to="/photography">Photography</a>
        </li>
        <li class="gallery-item display-6" :class="{ 'selected-gallery-item': $route.path === '/Gallery/sketches' }">
          <a v-on:click="onClick('sketches')" to="/sketches">Sketches</a>
        </li>
        <li class="gallery-item display-6" :class="{ 'selected-gallery-item': $route.path === '/Gallery/music' }">
          <a v-on:click="onClick('music')" to="/music">Music</a>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.gallery {
  padding-top: 5vh;
}

ul {
  margin: 3vh 0 3vh 0;
  padding: 0;
}

.gallery-item {
  color: black;
  font-family: var(--classy-font);
  text-decoration: none;
  list-style: none;
  padding: 10px 20px;
  letter-spacing: 0.5vw;
  font-weight: normal;
  transition: color 0.3s ease;
}

.gallery-title {
  font-family: var(--classy-font);
  font-weight: bold;
  letter-spacing: 0.2vw;
  margin: 20px 0;
  color: black;
}

.gallery-item:hover {
  color: white;
  cursor: pointer;

  a {
    color: white;
  }
}

.selected-gallery-item {
  background-color: grey;
  border: 1px solid grey;
  border-radius: 5px;
}

a {
  color: black;
}

@media screen and (max-width: 950px) {
  ul {
    flex-wrap: wrap;
  }
}
</style>