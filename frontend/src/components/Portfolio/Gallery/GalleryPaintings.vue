<template>
  <div class="paintings container-fluid">
    <div class="card-container">
      <div v-for="(image, index) in images" :key="index" class="card">
        <img :src="image.src" alt="Painting" class="image">
        <div class="title">{{ image.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Monet1 from '@/assets/files/Monet2.jpg'
import Monet2 from '@/assets/files/Monet1.jpg'
import Monet3 from '@/assets/files/Monet4.jpg'
import Monet4 from '@/assets/files/Monet3.jpg'

export default {
  name: "GalleryDetail",
  data() {
    return {
      images: [
        {title: 'Monet 1', src: Monet1},
        {title: 'Monet 2', src: Monet2},
        {title: 'Monet 3', src: Monet3},
        {title: 'Monet 4', src: Monet4}
      ]
    }
  }
}
</script>

<style scoped>
.paintings::after {
  content: "";
  display: table;
  clear: both;
}

.card-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.card {
  height: 1%;
  padding: 5px;
  max-width: 40%;
  min-width: 30%;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  text-align: center;
}

.image {
  width: 100%;
}

.title {
  padding: 10px;
}

@media screen and (max-width: 600px) {
  .card {
    max-width: 80%;
  }
}
</style>
