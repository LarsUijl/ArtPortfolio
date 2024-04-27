<script>
export default {
  name: "Home"
}
</script>

<template>
  <div class="home">
    <div class="video-container">
      <video width="480" height="720" controls autoplay muted loop>
        <source src="@/assets/files/SorayaliciaIntroVideo.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<style scoped>
/* Style the video container (optional) */
.video-container {
  position: relative; /* Optional for additional styling */
}
</style>