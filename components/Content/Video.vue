<template>
  <div ref="video" class="video-wrapper">
    <!-- {{ videoTag }} -->
    <video :controls="controls" :autoplay="autoplay" :loop="loop">
      <source :src="src" type="video/mp4" />
      <source type="mp4" />
    </video>
    <!-- <cld-video
      :public-id="videoSrc"
      width="500"
      crop="scale"
      quality="auto"
      :autoplay="autoplay"
      :muted="autoplay"
      :controls="controls"
      :lazy="true"
    /> -->
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    autoplay: {
      type: Boolean,
      required: false,
    },
    controls: {
      type: Boolean,
      required: false,
    },
    loop: {
      type: Boolean,
      required: false,
    },
    fadeIn: {
      type: Boolean,
      required: false,
    },
  },
  mounted() {
    const vidWrapper = this.$refs.video;
    // console.log(vid);
    if (vidWrapper) {
      const vid = vidWrapper.querySelector("video");
      if (vid) {
        vid.addEventListener("ended", this.videoEnded, false);

        if (this.fadeIn) {
          vid.classList.add("fade-in");
        }
      }
    }
  },
  computed: {
    videoSrc() {
      const element = this.$cloudinary.video.url(this.src, {
        format: "mp4",
      });
      return element;
    },
  },
  methods: {
    videoEnded() {
      // console.log("ended");
      this.$emit("video-ended");
    },
  },
};
</script>
