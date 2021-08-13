<template>
  <div>
    <div v-if="!isMediaLoaded">Loading...</div>
    <div v-if="isMediaLoaded" class="media-wrapper">
      <div
        v-for="(item, index) in media"
        :key="index"
        :ref="`mediaItem`"
        class="media-item"
      >
        <img :src="item" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    script: [
      {
        type: "text/javascript",
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js",
      },
      {
        type: "text/javascript",
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/ScrollTrigger.min.js",
      },
    ],
  },
  props: {
    path: String,
    total: Number,
  },
  data() {
    return {
      media: [],
      isMounted: false,
    };
  },
  mounted() {
    this.isMounted = true;
    this.loadMedia();
  },
  watch: {
    isMounted() {
      if (!this.isMounted) {
        return false;
      }
      this.$nextTick(function () {
        this.setAnimations();
      });
    },
  },
  computed: {
    isMediaLoaded() {
      if (this.media.length < this.total) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    loadMedia() {
      let media = [];
      for (let i = 0; i < this.total; i++) {
        let index;
        if (i < 10) {
          index = `0${i}`;
        } else {
          index = i;
        }
        media.push(`${this.path}${index}.jpg`);
      }
      this.media = media;
    },
    registerPlugins() {
      gsap.registerPlugin(ScrollTrigger);
    },
    setAnimations() {
      this.registerPlugins();
      //   console.log(gsap);

      if (!gsap || !ScrollTrigger) {
        console.log("cancelling animation, no gsap or st exists");
        return;
      }

      console.log("media items: ", this.$refs.mediaItem);

      let masks = gsap.utils.toArray(this.$refs.mediaItem);
      console.log("setting animations on ", masks, masks.length);

      if (masks.length === 0) {
        console.log("cancelling animation, no media wrapper items exist");
        return;
      }

      gsap.set(masks, {
        opacity: "0",
      });

      masks.forEach((panel, i) => {
        // ScrollTrigger.create({
        //   trigger: panel,
        //   start: "top top",
        //   pin: true,
        //   pinSpacing: false,
        // });
        gsap.to(panel, {
          opacity: "1",
          ease: "none",
          scrollTrigger: {
            trigger: ".media-wrapper",
            start: "top top",
            pin: true,
            end: "+=100%",
            scrub: 0.5,
          },
        });
      });
    },
  },
};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
}
.media-wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.media-item {
  width: 100%;
  height: 100%;
}
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  min-width: 100%;
}
</style>