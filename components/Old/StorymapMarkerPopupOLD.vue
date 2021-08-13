<template>
  <div class="container marker marker-pop-up">
    <div class="pop-up">
      <button class="close-btn" @click="closeMarkerPopup">X Back to Map</button>
      <div v-if="media">
        <div v-if="media.headline">
          <h2>{{ media.headline }}</h2>
        </div>
        <div v-if="media.description">
          <p>{{ media.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentMarkerObject: Object,
  },
  computed: {
    media() {
      if (!this.currentMarkerObject) {
        return null;
      }
      return this.currentMarkerObject.media;
    },
  },
  methods: {
    closeMarkerPopup() {
      this.$emit("closeMarkerPopup");
    },
  },
};
</script>


<style scoped>
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(0) scale(0);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}
.pop-up {
  background: white;
  position: relative;
  padding: 15px;
  border-radius: 0.3em;
  z-index: 100;
  position: fixed;
  top: 30%;
  left: 30%;
  width: 40%;
  min-height: 40%;
  opacity: 0;
  transform-origin: center center;
  animation: slideIn 0.45s 0.5s ease-in forwards;
}

.headline {
  font-size: 24px;
  font-weight: bold;
}
</style>