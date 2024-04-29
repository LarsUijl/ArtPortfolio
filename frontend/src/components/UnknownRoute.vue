<script>
export default {
  name: "UnknownRoute"
}
</script>

<template>
  <div>Oops that page doesn't seem to exist, Please go back to the home page</div>
  <div>
    <router-link class="border-5" to="/Home">Home</router-link>
  </div>
</template>

<style scoped>
a {
  color: white
}
</style>