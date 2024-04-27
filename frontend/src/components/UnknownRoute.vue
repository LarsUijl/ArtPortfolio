<script>
export default {
  name: "UnknownRoute"
}
</script>

<template>
  <div>Oops seems that page doesnt exist, Please go back to the home page</div>
  <div>
    <router-link class="border-5" to="Home">Home</router-link>
  </div>
</template>

<style scoped>
a {
  color: white
}
</style>