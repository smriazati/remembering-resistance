<template>
  <div class="container marker marker-label">
    <div class="label" @click="openMarkerPopup">
      <button class="label-icon">
        <div class="visually-hidden">Open marker</div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    markerId: Number,
  },
  methods: {
    openMarkerPopup() {
      this.isCollapsed = !this.isCollapsed;
      this.$emit("openMarkerPopup", {
        currentMarker: this.markerId,
      });
    },
  },
};
</script>

<style>
.visually-hidden {
  display: none;
}

button {
  border: none;
  outline: 0;
  background: transparent;
  padding: 0;
}

button:hover,
.close-btn {
  cursor: pointer;
}

.label button {
  background: rgba(255, 192, 203, 0.708);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  transition: 0.3s ease all;
}
.label button:hover {
  background: rgba(255, 255, 255, 1);
}
</style>