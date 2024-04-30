<template>
  <div class="contact d-flex flex-column justify-content-center align-items-center bg-light">
    <h2 class="display-6 width text-center my-4">Get in contact</h2>
    <p class="width text-center">Fill out the form below, or get in touch by emailing: management@sorayalicia.com</p>
    <form class="width d-flex flex-column" @submit.prevent="submitForm">
      <label for="firstName">First name*</label>
      <input id="firstName" placeholder="John" v-model="firstName" required>

      <label for="lastName">Last name</label>
      <input id="lastName" placeholder="Smith" v-model="lastName">

      <label for="email">Email*</label>
      <input id="email" placeholder="John-Smith@example.com" v-model="email" required>

      <label for="companyName">Company name</label>
      <input id="companyName" v-model="companyName">

      <label for="message">Message</label>
      <textarea id="message" placeholder="Let's collab!" v-model="message"></textarea>

      <div>
        <input type="checkbox" id="newsletter" class="mx-1" v-model="newsletter">
        <label for="newsletter">Yes, subscribe me to your newsletter.</label>
      </div>

      <div class="d-flex justify-content-center align-items-center">
        <button class="w-50 bg-danger text-light" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      companyName: '',
      message: '',
      workTogether: false,
      newsletter: false
    }
  },
  methods: {
    submitForm() {
      // Handle form submission here
    }
  }
}
</script>

<style scoped>
.contact {
  padding-top: 5vh;
  height: 95vh;
}

label {
  font-family: var(--classy-font);
}

input, textarea, button {
  padding: 8px 12px 8px 12px;
  margin-bottom: 16px;
}

.width {
  width: 45%;
}

@media screen and (max-width: 600px) {
  .width {
    width: 80%;
  }
}

@media screen and (max-width: 950px) {
  .width {
    width: 60%;
  }
}
</style>