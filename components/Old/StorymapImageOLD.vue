<template>
  <div
    class="container interactive-image"
    :style="`width: ${mapContainerWidth}px; margin-left: ${mapContainerMarginLeft}px; height: ${mapContainerHeight}px; margin-top: ${mapContainerMarginTop}px; `"
    :data-is-marker-open="isMarkerOpen"
    :data-animation-state="mapAnimationState"
  >
    <div
      class="map-image"
      ref="mapImage"
      :style="`--xpos:${currentMarkerPosition.xPos}; --ypos: ${currentMarkerPosition.yPos}; --xoffset:${currentMarkerPosition.xOffset}; --yoffset:${currentMarkerPosition.yOffset};`"
    >
      >
      <img :src="mapImage.url" alt="tktktk" />
      <div v-show="openMarker !== null" class="overlay"></div>
    </div>
    <div v-if="showMarkers" class="markers-wrapper">
      <StorymapMarkerLabel
        v-for="marker in mapMarkers"
        :key="marker.id"
        :style="`left: ${(marker.xPos - markerPercentWidth / 2) * 100}%; top: ${
          (marker.yPos - markerPercentWidth / 2) * 100
        }%`"
        :name="marker.name"
        :markerId="marker.id"
        :media="marker.media"
        @openMarkerPopup="openMarkerPopup"
      />
    </div>
    <div v-if="currentMarkerObject" class="modal">
      <StorymapMarkerPopup
        :currentMarkerObject="currentMarkerObject"
        @closeMarkerPopup="closeMarkerPopup"
      />
    </div>

    <div class="utilities">
      <button @click="toggleCoordinatesTool">
        <span v-if="clickForCoordinates.isActive">Show markers</span>
        <span v-else>+</span>
      </button>

      <div v-if="clickForCoordinates.isActive" class="clickForCoordinatesTool">
        <ul>
          <li>x: {{ clickForCoordinates.x }}</li>
          <li>y: {{ clickForCoordinates.y }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mapImage: Object,
    mapMarkers: Array,
    mapSettings: Object,
  },
  data() {
    return {
      windowWidth: null,
      windowHeight: null,
      mapWidth: this.mapSettings.mapScale, // 0 to 1,
      clickForCoordinates: {
        isActive: false,
        x: null,
        y: null,
      },
      showMarkers: true,
      markerWidth: 40, // px,
      openMarker: null,
    };
  },
  computed: {
    isMarkerOpen() {
      if (this.openMarker === null) {
        return false;
      } else {
        return true;
      }
    },
    currentMarkerObject() {
      if (!this.isMarkerOpen) {
        return null;
      }
      const currentMarkerObjectFilter = this.mapMarkers.filter(
        (marker) => marker.id == this.openMarker
      );
      return currentMarkerObjectFilter[0];
    },
    currentMarkerPosition() {
      let currentMarkerPosition = {
        xPos: "50%",
        yPos: "50%",
        xOffset: "0%",
        yOffset: "0%",
      };
      if (this.isMarkerOpen) {
        let currentMarkerObject = this.currentMarkerObject;
        const xPos = parseFloat(currentMarkerObject.xPos) * 100;
        const yPos = parseFloat(currentMarkerObject.yPos) * 100;
        let xOffset = 0;
        let yOffset = 0;
        if (xPos < 50) {
          xOffset = 50 - xPos;
        } else {
          xOffset = (xPos - 50) * -1;
        }

        if (yPos < 50) {
          yOffset = 50 - yPos;
        } else {
          yOffset = (yPos - 50) * -1;
        }
        currentMarkerPosition = {
          xPos: `${xPos}%`,
          yPos: `${yPos}%`,
          xOffset: `${xOffset}%`,
          yOffset: `${yOffset}%`,
        };
      }

      return currentMarkerPosition;
    },
    mapImageAspectRatio() {
      const mapImage = this.mapImage;
      if (!mapImage) {
        return null;
      }
      if (!mapImage.height || !mapImage.width) {
        return null;
      }
      return mapImage.width / mapImage.height;
    },
    mapContainerWidth() {
      if (!this.windowWidth || !this.mapWidth) {
        return null;
      }
      return parseInt(this.windowWidth * this.mapWidth);
    },
    markerPercentWidth() {
      return parseFloat((this.markerWidth / this.mapContainerWidth).toFixed(2));
    },
    mapContainerMarginLeft() {
      if (!this.windowWidth || !this.mapContainerWidth) {
        return null;
      }
      return parseInt((this.windowWidth - this.mapContainerWidth) / 2);
    },
    mapContainerHeight() {
      return (
        (this.mapImage.height * this.mapContainerWidth) / this.mapImage.width
      );
    },
    mapContainerMarginTop() {
      if (!this.mapContainerHeight) {
        return null;
      }

      if (this.windowWidth > this.windowHeight && this.windowHeight < 600) {
        return null; // no vert centering in short screens
      }

      return parseInt((this.windowHeight - this.mapContainerHeight) / 2);
    },
    mapAnimationState() {
      if (this.openMarker !== null) {
        return "openMarker";
      } else {
        return "flatMap";
      }
    },
  },
  mounted() {
    this.setWindowSizes();
    window.addEventListener("resize", () => {
      this.setWindowSizes();
    });
    document.addEventListener("click", this.setCoordinatesOnClick);
  },
  methods: {
    closeMarkerPopup() {
      this.openMarker = null;
    },
    openMarkerPopup(payload) {
      const currentMarker = payload.currentMarker;
      this.openMarker = currentMarker;
    },
    setWindowSizes() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
    },
    setCoordinatesOnClick(e) {
      // get px values from click
      const rect = e.target.getBoundingClientRect();
      let x = (e.clientX - rect.left) / this.mapContainerWidth;
      let y = (e.clientY - rect.top) / this.mapContainerHeight;

      this.clickForCoordinates.x = x.toFixed(2);
      this.clickForCoordinates.y = y.toFixed(2);
    },
    toggleCoordinatesTool() {
      this.clickForCoordinates.isActive = !this.clickForCoordinates.isActive;
      if (this.clickForCoordinates.isActive) {
        this.showMarkers = false;
      } else {
        this.showMarkers = true;
      }
    },
    toggleMarkerVisibility() {
      this.showMarkers = !this.showMarkers;
    },
    checkMarkerStatus(payload) {
      const isCollapsed = payload.isCollapsed;
      const currentMarker = payload.currentMarker;
      if (isCollapsed === true) {
        this.openMarker = null;
      } else {
        this.openMarker = currentMarker;
      }
    },
  },
};
</script>

<style>
.interactive-image {
  position: relative;
}

.interactive-image > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

img {
  width: 100%;
  max-width: 100%;
}

.markers-wrapper {
  position: relative;
}
.markers-wrapper > * {
  position: absolute;
}

.markers-wrapper > *.marker-collapsed {
  z-index: 10;
}

.markers-wrapper > *.marker-open {
  z-index: 100;
}

.utilities {
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  color: white;
  width: auto;
  height: auto;
}
.clickForCoordinatesTool {
  width: 150px;
}
ul {
  list-style: none;
}

.interactive-image {
  perspective: 1000px;
}
.interactive-image .map-image {
  transition: 0.5s ease-in transform, 0s linear transform-origin;
  transform-origin: var(--xpos) var(--ypos);
}
.interactive-image[data-animation-state="flatMap"] .map-image {
  transform: scale(1);
}

.interactive-image[data-animation-state="openMarker"] .map-image {
  transform: translateX(var(--xoffset)) translateY(var(--yoffset)) scale(2);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.interactive-image[data-is-marker-open="true"] .label {
  display: none;
}
</style>