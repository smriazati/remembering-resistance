<template>
  <div ref="gallery" class="image-gallery">
    <div v-for="(item, index) in 5" :key="index">
      <div v-for="(item, index) in media" :key="index" class="img">
        <img :src="item.pathLong" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    media: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      images: [],
      isMounted: false,
    };
  },

  mounted() {
    this.isMounted = true;
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
  methods: {
    setAnimations() {
      if (!gsap || !ScrollTrigger) {
        console.log("cancelling animation, no gsap or st exists");
        return;
      }

      console.log("gsap is here", gsap);
      const gallery = this.$refs.gallery;
      if (!gallery) {
        return;
      }
      const scrollElements = gsap.utils.toArray(
        gallery.querySelectorAll(".img")
      );
      if (!scrollElements) {
        return;
      }

      console.log(scrollElements);
      scrollElements.forEach((element) => {
        gsap.set(element, {
          opacity: 0,
          y: 24,
        });

        element.anim = gsap.to(element, {
          paused: true,
          opacity: 1,
          y: 0,
        });
      });

      function staggerPlayBatch(batch) {
        gsap.to(batch, {
          stagger: {
            each: 0.3,
            onStart: function () {
              this.targets()[0].anim.play();
            },
          },
        });
      }

      function staggerReverseBatch(batch) {
        gsap.to(batch, {
          stagger: {
            each: 0.3,
            onStart: function () {
              this.targets()[0].anim.reverse();
            },
          },
        });
      }

      ScrollTrigger.batch(scrollElements, {
        onEnter: staggerPlayBatch,
        onLeave: staggerReverseBatch,
        onEnterBack: staggerPlayBatch,
        onLeaveBack: staggerReverseBatch,
      });
    },
  },
};
</script>

