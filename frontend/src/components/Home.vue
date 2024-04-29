<script>
export default {
  name: "Home"
}
</script>

<template>
  <div class="home clearfix">
    <div class="video-container">
      <video controls autoplay muted loop>
        <source src="@/assets/files/SorayaliciaIntroVideo.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<style scoped>
/* Style the video container (optional) */
.video-container {
  float: right;
  margin: 3vh 3vw 3vh 3vw;
}

video {
  width: 24vw;
  height: 90vh;
}

@media screen and (max-width: 1300px) {
  video {
    width: 35vw;
  }
}

@media screen and (max-width: 950px) {
  video {
    width: 50vw;
  }
}

@media screen and (max-width: 600px) {
  video {
    width: 80vw;
  }

  .home {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>