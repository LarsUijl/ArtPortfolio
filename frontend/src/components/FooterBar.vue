<script>
export default {
  name: "FooterBar"
}
</script>

<template>
  <div class="copyright">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <span>Copyright © 2024, All Right Reserved Sorayalicia</span>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.copyright {
  background: #202020;
  padding: 14px 0;
  color: #878787;
}

@media screen and (max-width: 950px) {
  span {
    font-size: 12px;
  }
}
</style>

