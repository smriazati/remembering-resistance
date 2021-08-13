<template>
  <div class="container">
    <!-- <ContentVideo
      src="/media/placeholder.mp4"
      :autoplay="true"
      @video-ended="onVideoEnd"
    /> -->
    <ContentPlaceholderVideo
      :description="vidDescription"
      :duration="3"
      :next="`/exhibit/${name}/branches`"
      @on-done="onVideoEnd()"
    />
  </div>
</template>


<script>
export default {
  data() {
    return {
      name: "aftermath",
      isVideoEnded: false,
      vidDescription:
        "To transition from the last section, the screen will fade back into the Jewish ghetto and it will be burnt down. The screen will pan the user to the forest/tree.",
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
