<script>
import portrait from '@/assets/files/personal_picture.jpg'

export default {
  name: "AboutPage",
  data() {
    return {
      portrait: {title: 'personal picture', src: portrait}
    }
  }
}
</script>

<template>
  <div class="about d-flex justify-content-between ">
    <div class="portrait-container">
      <img :src='portrait.src' alt="Painting" class="portrait">
    </div>
    <div class="about-text">
      <h2 class="text-center m-5">Get to know me better</h2>
      <p>
        I'm a multidisciplinary artist, deeply immersed in both visual art and music. From capturing moments through
        photography to crafting intricate designs in graphic art, painting, and drawing, I find joy in exploring diverse
        creative avenues. Experimentation fuels my artistic journey, allowing me to constantly push boundaries and
        discover new possibilities. Alongside visual art, I express myself through music, writing compositions and
        playing various instruments. My artistic identity thrives on the freedom to explore and create across different
        mediums, embracing the endless possibilities of creative expression.
      </p>
      <div class="d-flex justify-content-center align-items-center py-5">
        <router-link class="contact-button w-25 bg-danger text-light text-center" to="contact">Contact me</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  background-color: #65706C;
  padding-top: 5vh;
  height: 95vh;
  font-family: var(--classy-font);
  letter-spacing: 0.1vw;
  color: white;
}

.portrait {
  height: 80vh;
  width: 30vw;
  margin: 5vh 5vw 5vh 10vw
}

.about-text {
  max-width: 40%;
  margin: 5vh 15vw 5vh 5vw
}

p {
  font-size: 18px;
}

h2 {
  font-weight: bold;
}

.contact-button {
  padding: 8px 12px 8px 12px;
  border: 1px solid black;
  font-weight: bold;
}
</style>