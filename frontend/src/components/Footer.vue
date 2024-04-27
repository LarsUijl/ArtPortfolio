<script>
export default {
  name: "Footer"
}
</script>

<template>
  <div class="footer">
    <div class="container m-0">
      <div class="row-12 d-flex text-white">
        <div class="info-box col-lg-4 row-md-12">
          <img src="https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784_960_720.png" alt="footer_logo"
               class="img-fluid">
          <p class="text-center">Art Portfolio image and media technology HKU by Soraya Alicia </p>
          <div class="col-12">
            <h3 class="text-center">Follow me</h3>
            <ul class="d-flex justify-content-evenly p-0 m-0">
              <li class="socials">
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li class="socials">
                <a href="#">
                  <i class="fab fa-tiktok"></i>
                </a>
              </li>
              <li class="socials">
                <a href="#">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
              <li class="socials">
                <a href="#">
                  <i class="fab fa-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-8 px-5 py-5">
          <p>Amsterdam, Netherlands</p>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <span>Copyright © 2019, All Right Reserved Sorayalicia</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.info-box {
  background: #202020;
  padding: 30px;
  margin: 10px 0 10px 0;
}

.footer {
  background: #151414;
}

.copyright {
  background: #202020;
  padding: 14px 0;
  color: #878787;
}

li.socials {
  list-style: none;
  width: 50px; /* Set width for each social icon container */
  height: 50px; /* Set height for each social icon container */
  text-align: center;
  line-height: 50px; /* Center icon vertically */
  border-radius: 50%; /* Create circular shape */
  background-color: #333; /* Set background color for icons */
  margin: 0 5px; /* Add spacing between icons */
  transition: background-color 0.3s ease; /* Add hover effect transition */
}

li.socials:hover {
  background-color: #444; /* Change background color on hover */
}

.fa,
.fab { /* Target both Font Awesome free and brands icons */
  font-size: 20px; /* Set icon size */
  color: white; /* Set icon color */
}
</style>

