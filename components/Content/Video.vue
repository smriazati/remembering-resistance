<template>
  <div class="video-wrapper">
    <div v-if="!controls">
      <div v-if="autoplay">
        <video ref="video" :src="src" muted :autoplay="autoplay"></video>
      </div>
      <div v-if="!autoplay">
        <video ref="video" :src="src"></video>
      </div>
    </div>
    <div v-if="controls">
      <div v-if="autoplay">
        <video
          ref="video"
          :src="src"
          controls="true"
          muted
          :autoplay="autoplay"
        ></video>
      </div>
      <div v-if="!autoplay">
        <video ref="video" :src="src" controls="true"></video>
      </div>
    </div>
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
  },
  mounted() {
    const vid = this.$refs.video;
    vid.addEventListener("ended", this.videoEnded, false);
  },
  methods: {
    videoEnded() {
      this.$emit("video-ended");
    },
  },
};
</script>
