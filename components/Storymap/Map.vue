<template>
  <div>
    <div class="storymap-map">
      <div class="storymap-labels">
        <div
          v-for="item in markers"
          :key="item.id"
          @mouseover="previewMarker(item.id)"
          @mouseout="unpreviewMarker(item.id)"
          @click="openStory(item.id)"
          :class="viewedStories.includes(item.id) ? 'viewed-story' : ''"
          class="storymap-label"
        >
          {{ item.name }}
        </div>
      </div>
      <div ref="map" class="map"></div>
    </div>
  </div>
</template>
<script>
// map styles: https://console.cloud.google.com/google/maps-apis/studio/styles/2aab9e7b33c0dcc2/edit?project=mastering-nuxt-317015

export default {
  mounted() {
    this.$maps.showMap(
      this.$refs.map,
      this.center.lat,
      this.center.lng,
      this.markers,
      this.name
    );
  },
  props: {
    markers: Array,
    center: Object,
    name: String,
  },
  data() {
    return {
      lastPreviewedMarker: null,
    };
  },
  computed: {
    previewStory() {
      return this.$store.state[this.name].previewStory;
    },
    viewedStories() {
      return this.$store.state[this.name].viewedStories;
    },
  },
  watch: {
    previewStory() {
      if (this.previewStory || this.previewStory === 0) {
        this.lastPreviewedMarker = this.previewStory;
        this.highlightMarker(this.previewStory, true);
      } else {
        this.highlightMarker(this.lastPreviewedMarker, false);
      }
    },
    viewedStories() {
      if (this.viewedStories.length > 0) {
        this.muteMarker(this.viewedStories[this.viewedStories.length - 1]);
      }

      if (this.viewedStories.length === 0) {
        this.markers.forEach((m) => {
          this.unmuteMarker(m.id);
        });
      }
    },
  },
  methods: {
    previewMarker(markerId) {
      console.log(
        "previewing marker",
        markerId,
        "name is",
        this.markers.filter((section) => section.id === markerId)[0].name
      );
      this.$store.commit(`${this.name}/previewStory`, markerId);
    },
    unpreviewMarker(markerId) {
      this.$store.commit(`${this.name}/unpreviewStory`, markerId);
    },
    highlightMarker(markerId, isHighlighted) {
      if (isHighlighted) {
        console.log("highlighting marker with id", markerId);
      } else {
        console.log("unhighlighting marker with id", markerId);
      }
      document
        .getElementsByClassName(`m-${markerId}`)[0]
        ?.classList?.toggle("marker-highlight", isHighlighted);
    },
    centerMap() {
      this.$maps.centerMap(this.center.lat, this.center.lng);
    },
    muteMarker(markerId) {
      console.log("muting marker", markerId);
      document
        .getElementsByClassName(`m-${markerId}`)[0]
        ?.classList?.add("marker-viewed");
    },
    unmuteMarker(markerId) {
      console.log("unmuting marker", markerId);
      document
        .getElementsByClassName(`m-${markerId}`)[0]
        ?.classList?.remove("marker-viewed");
    },
    openStory(id) {
      // this.muteMarker(id);
      // this.$emit("open-story", id);
      this.$store.commit(`${this.name}/activateStory`, id);
    },
  },
};
</script>
