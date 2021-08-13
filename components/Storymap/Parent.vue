<template>
  <div>
    <div class="storymap-parent">
      <div v-if="activeStory">
        <StorymapStory :story="activeStory" @close-map="closeMap" />
      </div>
      <div v-if="markers">
        <StorymapMap
          :center="center"
          :name="name"
          :markers="markers"
          @open-story="activateStory"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    markers: Array,
    stories: Array,
  },
  data() {
    return {
      center: {
        lat: 50.7003356,
        lng: 26.5719255,
      },
    };
  },
  computed: {
    areStoriesLoaded() {
      if (!this.stories) {
        return false;
      }
      if (this.stories.length < 1) {
        return false;
      }

      return true;
    },
    activeStory() {
      if (!this.areStoriesLoaded) {
        return false;
      }
      return this.stories[this.$store.state.occupation.activeStory];
    },
    viewedStories() {
      return this.$store.state.occupation.viewedStories;
    },
    viewedAll() {
      if (this.viewedStories.length === this.stories.length) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    closeMap() {
      this.$store.commit("occupation/deactivateStory", this.activeStory.id);
    },
    activateStory(id) {
      this.$store.commit("occupation/activateStory", id);
    },
  },
};
</script>
