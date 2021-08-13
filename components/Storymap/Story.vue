<template>
  <div class="container storymap-story">
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
export default {
  props: {
    story: Object,
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
  methods: {
    closeMap() {
      this.$emit("close-map");
    },
  },
};
</script>
