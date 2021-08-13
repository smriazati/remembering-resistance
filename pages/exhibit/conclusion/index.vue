<template>
  <div class="container">
    <!-- <ContentVideo
      src="/media/placeholder.mp4"
      :autoplay="true"
      @video-ended="onVideoEnd"
    /> -->
    <ContentPlaceholderVideo
      :description="vidDescription"
      :duration="10"
      :next="`/exhibit/${name}/tree`"
      @on-done="onVideoEnd()"
    />
  </div>
</template>


<script>
export default {
  data() {
    return {
      name: "conclusion",
      isVideoEnded: false,
      vidDescription:
        "The user will be guided back to the main tree (based on the one near the Schwartzman home). They will hear narration about the tree of life in Jewish culture and will be taken up through the bark and watch as leaves fall to the ground with possibly a note of a song playing as each leaf falls.",
    };
  },
  mounted() {
    this.$store.commit("exhibitnav/hideNav");
  },
  methods: {
    onVideoEnd() {
      this.isVideoEnded = true;
      // .$router.push("/exhibit/resistance/branches");
    },
  },
};
</script>


