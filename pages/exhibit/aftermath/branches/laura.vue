<template>
  <div ref="wrapper" class="container slider-container">
    <div class="wrapper">
      <div class="label">
        <div class="text-decoration"></div>
        <h1>Laura Oberlander</h1>
      </div>
      <div ref="slider" class="questions slider-wrapper">
        <div class="slider-controls">
          <div>
            <span class="small">{{ activeSlide + 1 }} of {{ slideCount }}</span>
            <button :disabled="activeSlide === 0" @click="prevSlide">
              <span>Previous</span>
            </button>
            <button @click="nextSlide"><span>Next</span></button>
          </div>
          <div></div>
          <div>
            <button v-if="slideCount === activeSlide + 1 || finishedOnce">
              <nuxt-link to="/exhibit/aftermath/talkback"> Move on</nuxt-link>
            </button>
          </div>
        </div>
        <div class="slider-slides">
          <div class="slider-item" data-active-slide="true">
            <h2>What happened to your sister Chana?</h2>
            <ContentVideo src="/media/4/laura-01.mp4" :controls="true" />
          </div>
          <div class="slider-item">
            <h2>Where did you go after the Germans left Tuchyn?</h2>
            <ContentVideo src="/media/4/laura-02.mp4" :controls="true" />
          </div>
          <div class="slider-item">
            <h2>What happened to Jewish refugees?</h2>
            <ContentVideo src="/media/4/laura-03.mp4" :controls="true" />
          </div>
          <div class="slider-item">
            <h2>Why did you emigrate to the United States?</h2>
            <ContentVideo src="/media/4/laura-04.mp4" :controls="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import animation from "~/mixins/sliderAnimations.js";

export default {
  data() {
    return {
      lastSlide: null,
      activeSlide: null,
      slideCount: null,
      // isMounted: false,
    };
  },
  mixins: [animation],
  watch: {
    activeSlide() {
      if (this.activeSlide > -1) {
        // reset all slides
        this.$refs.slider
          .querySelectorAll('[data-active-slide="true"]')
          .forEach((i) => {
            i.dataset.activeSlide = false;
          });

        // set new slide to active
        this.$refs.slider.querySelectorAll(".slider-item")[
          this.activeSlide
        ].dataset.activeSlide = true;
      }

      if (this.activeSlide === this.slideCount - 1) {
        this.$store.commit("aftermath/finishedOnce");
      }
    },
  },
  computed: {
    finishedOnce() {
      return this.$store.state.aftermath.finishedOnce;
    },
  },
  methods: {
    initSlider() {
      if (!this.$refs.slider) {
        return;
      }
      const slider = this.$refs.slider;
      const slides = slider.querySelectorAll(".slider-item");
      this.slideCount = slides.length;
      this.activeSlide = 0;
    },
    prevSlide() {
      this.lastSlide = this.activeSlide;
      const video = document.querySelector('*[data-active-slide="true"] video');
      if (video) {
        video.pause();
      }
      if (this.lastSlide > 0) {
        this.activeSlide = this.activeSlide - 1;
      } else {
        // this.activeSlide = this.slideCount;
      }
      this.prevSlideAnimation(this.activeSlide);
    },
    nextSlide() {
      this.lastSlide = this.activeSlide;
      const video = document.querySelector('*[data-active-slide="true"] video');
      if (video) {
        video.pause();
      }
      if (this.lastSlide < this.slideCount - 1) {
        this.activeSlide = this.activeSlide + 1;
      } else {
        this.activeSlide = 0;
      }
      this.nextSlideAnimation(this.activeSlide);
    },
  },
  mounted() {
    this.initSlider();
  },
};
</script>
