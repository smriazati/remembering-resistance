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
      :next="`/exhibit/${name}/branches`"
      @on-done="onVideoEnd()"
    />
  </div>
</template>


<script>
export default {
  data() {
    return {
      name: "resistance",
      isVideoEnded: false,
      vidDescription:
        "A short, 5-minute film will then appear that describes the Tuchyn ghetto uprising and the different ways that people resisted. The film will use footage from the Mnemonics film about Tuchyn and will be narrated by a survivor or a descendant - perhaps Michael Emmett.  At the end, the screen will transition back into a fire and will fade to black.",
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
