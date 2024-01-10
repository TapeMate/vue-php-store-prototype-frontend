<template>
  <div class="portfolio-wrapper">
    <h2 class="portfolio-header">PORTFOLIO</h2>
    <div class="home-portfolio">
      <div class="portfolio-img-container">
        <img :src="slider01" alt="dummy image" />
        <h5>REPAIR SERVICE</h5>
      </div>
      <div class="portfolio-img-container">
        <img :src="slider02" alt="dummy image" />
        <h5>CONSULTING</h5>
      </div>
      <div class="portfolio-img-container">
        <img :src="slider03" alt="dummy image" />
        <h5>TRAININGS</h5>
      </div>
    </div>
  </div>
</template>

<script>
import Slider01 from "@/assets/img/slider01-repair.jpg";
import Slider02 from "@/assets/img/slider02-consulting.jpg";
import Slider03 from "@/assets/img/slider03-training.jpg";

export default {
  name: "HomePortfolio",
  data() {
    return {
      slider01: Slider01,
      slider02: Slider02,
      slider03: Slider03,
    };
  },
};
</script>
