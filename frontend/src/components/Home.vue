<script>
export default {
  name: "Home"
}
</script>

<template>
  <div class="home clearfix d-flex">
    <div class="col-lg-8 col-md-6 col-sm-4 brand-name d-flex align-items-start justify-content-center">
      <span class="text-light">
      <span class="text-danger">SORAYA</span>LICIA
    </span>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-8 video-container d-flex align-items-center justify-content-center">
      <video controls autoplay muted loop>
        <source src="@/assets/files/SorayaliciaIntroVideo.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<style scoped>
.brand-name {
  font-family: var(--brand-font);
  margin-top: 9vh;
  font-size: calc(2rem + 1.5vw);
  font-weight: bold;
}

.video-container {
  float: right;
}

video {
  width: 24vw;
  height: 90vh;
}

@media screen and (max-width: 1300px) {
  video {
    width: 30vw;
  }
}

@media screen and (max-width: 950px) {
  video {
    width: 40vw;
  }
}

@media screen and (max-width: 600px) {
  video {
    width: 80vw;
  }

  .home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>