<template>
  <div class="home-section-wrapper">
    <div class="section-container">
      <section>
        <div class="section-content-container">
          <img src="https://dummyimage.com/300x200/000/fff" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            accusamus officia illum, dolores exercitationem.
          </p>
        </div>
        <div class="section-content-container">
          <h5>We make professional Equipment.</h5>
          <button>FIND OUR PRODUCTS HERE</button>
        </div>
      </section>
    </div>
    <div class="section-container">
      <section>
        <div class="section-signup-container">
          <SignupForm />
        </div>
        <div class="section-login-container">
          <LoginForm />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import SignupForm from "@/components/SignupForm.vue";
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "HomeSections",
  components: {
    SignupForm,
    LoginForm,
  },
};
</script>
