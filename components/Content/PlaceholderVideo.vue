<template>
  <div class="placeholder-video-wrapper">
    <div class="placeholder-video-container">
      <div class="video"></div>
      <div
        ref="progressBar"
        class="duration"
        :data-duration="duration"
        :style="`width: ${progress}%`"
      ></div>
      <div class="text">
        <h2>[Placeholder for video]</h2>
        <p>{{ description }}</p>
        <nav>
          <button
            :disabled="!completed"
            class="flat flat-invert"
            @click="restart"
          >
            <span>Restart</span>
          </button>
          <button v-if="completed" class="flat flat-invert">
            <nuxt-link :to="next">Next</nuxt-link>
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    duration: {
      type: Number,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    next: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      progress: 0,
      completed: false,
      tempo: 10,
    };
  },
  mounted() {
    this.setTempo();
    this.timer(this.tempo);
  },
  methods: {
    setTempo() {
      if (this.duration) {
        this.tempo = this.duration * 10;
      } else {
        this.tempo = this.tempo * 10;
      }
      console.log("set duration to", this.tempo);
    },

    timer(tempo) {
      let setIntervalRef = setInterval(() => {
        this.progress++;
        // console.log("progress is", this.progress);
        if (this.progress == 100) {
          clearInterval(setIntervalRef);
          this.completed = true;
          this.onDone();
        }
      }, tempo);
    },
    onDone() {
      this.$emit("on-done", true);
    },
    restart() {
      this.completed = false;
      this.progress = 0;
      this.timer(this.tempo);
    },
  },
};
</script>
