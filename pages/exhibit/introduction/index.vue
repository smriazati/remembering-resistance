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
      name: "introduction",
      isVideoEnded: false,
      vidDescription:
        "The exhibit will begin with an introductory sequence in which people begin with a bird’s eye view in Google Earth of Europe and then slowly zoom in to Eastern Europe, Ukraine, the Rivne region, Tuchyn, and then the tree. There will be audio narration on top of the video.",
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
