<template>
  <div ref="story" class="container storymap-story">
    <div class="story-wrapper">
      <header v-if="story.title" class="title-wrapper">
        <!-- <ContentBanner :h2="story.title" /> -->
        <h2>{{ story.title }}</h2>
      </header>
      <div class="text-wrapper">
        <div v-if="story.text">
          <div v-html="story.text"></div>
        </div>
        <button class="flat spacer-top" @click="closeMap">
          <span>Back to map →</span>
        </button>
      </div>
      <div v-if="hasMedia" class="gallery-wrapper">
        <ContentPhotoFeed :media="story.media" />
      </div>

      <div class="modal-controls">
        <button class="close-btn" @click="closeMap">
          <span> Back to map</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import animations from "~/mixins/storymapAnimations.js";
export default {
  props: {
    story: Object,
  },
  data() {
    return {
      isMounted: false,
    };
  },
  mixins: [animations],
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
    hasMedia() {
      if (!this.story.media) {
        return false;
      }
      if (this.story.media.length < 1) {
        return false;
      }

      return true;
    },
  },
  mounted() {
    this.isMounted = true;
  },
  methods: {
    setAnimations() {
      if (!gsap || !ScrollTrigger || this.initAnimations === undefined) {
        console.log("cancelling animation, no gsap or st or mixin exists");
        return;
      }
      this.initAnimations();
    },
    closeMap() {
      this.$emit("close-map");
    },
  },
};
</script>
