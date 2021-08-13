<template>
  <div class="photo-gallery">
    <div v-if="count > 0">
      <figure>
        <img :src="media[current].src" :alt="media[current].alt" />
        <figcaption>
          <p>{{ media[current].caption }}</p>
        </figcaption>
      </figure>

      <button :disabled="current === 0" @click="goToPrev">Previous</button>
      <button :disabled="current === count - 1" @click="goToNext">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    media: Array,
  },
  data() {
    return {
      count: 0,
      current: -1,
      activeImage: null,
      previousImage: null,
      nextImage: null,
    };
  },
  mounted() {
    this.initGallery();
  },
  methods: {
    initGallery() {
      console.log(this.media);
      this.count = this.media.length;
      if (this.count < 1 || !this.count) {
        return;
      }
      this.current = this.current + 1;
      //   if (this.count > 1) {
      //     this.nextImage = this.media[1];
      //   }
    },
    goToNext() {
      if (this.current === this.count - 1) {
        this.current = 0;
      } else {
        this.current = this.current + 1;
      }
    },
    goToPrev() {
      if (this.current === 0) {
        this.current = this.count;
      } else {
        this.current = this.current - 1;
      }
    },
  },
};
</script>
