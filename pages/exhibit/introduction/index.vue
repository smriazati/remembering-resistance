<template>
  <div class="container">
    <ContentVideo
      src="https://res.cloudinary.com/dn8rmd4ql/video/upload/v1628906458/remembering-resistance-videos/tree-v1_g35ibo.mp4"
      :autoplay="true"
      :controls="false"
      :loop="false"
      class="full-height-video"
      :fade-in="true"
      @video-ended="onVideoEnd"
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
  mounted() {},
  methods: {
    onVideoEnd() {
      this.isVideoEnded = true;
      setTimeout(this.$router.push("/exhibit/introduction/branches"), 5000);
    },
  },
};
</script>
