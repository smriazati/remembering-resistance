<template>
  <div :class="`container ${name}`">
    <div v-if="showInstructions">
      <!-- <ContentModal
        :html="introModal.html"
        :closeText="introModal.closeText"
        :showModal="showInstructions"
        @close-modal="hideInstructionsModal()"
      /> -->
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="text-wrapper">
            <h2>German Occupation</h2>
            <p>
              About the German Occupation. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nam vitae nisi vitae leo aliquet
              suscipit ac ut dui. Donec a urna posuere, auctor sapien vitae,
              semper eros.
            </p>
            <p>
              <strong>Instructions:</strong> Explore all map markers to move on
              to the next section.
            </p>
          </div>
          <div class="call-to-action">
            <button @click="hideInstructionsModal">
              <span>Explore the map</span>
            </button>
            <!-- <button>
              <nuxt-link to="/exhibit/occupation/talkback">Move on</nuxt-link>
            </button> -->
          </div>
        </div>
      </div>
    </div>
    <div v-if="viewedAll" class="modal-wrapper">
      <div class="modal-container">
        <div class="text-wrapper">
          <p>Nice work! You explored everything.</p>
        </div>
        <div class="call-to-action">
          <button @click="resetMap"><span>Go back to map</span></button>
          <button>
            <nuxt-link to="/exhibit/occupation/talkback">Move on</nuxt-link>
          </button>
        </div>
      </div>
    </div>

    <div class="controls">
      <div class="center-button">
        <button id="center-button"><span>Center map</span></button>
        <button @click="showInstructionsModal">
          <span>Show instructions</span>
        </button>
        <button v-if="finishedOnce">
          <nuxt-link to="/exhibit/occupation/talkback">Move on</nuxt-link>
        </button>
      </div>
    </div>

    <StorymapParent :name="name" :markers="markers" :stories="stories" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      markers: this.$store.state.occupation.markers,
      stories: this.$store.state.occupation.stories,
      name: "occupation",
      introModal: {
        html: `<h2>Instructions</h2>
        <p>Explore all markers to move on to the next section.</p>`,
        id: 1,
        closeText: "Explore the map",
      },
      showInstructions: true,
    };
  },
  mounted() {
    // this.$store.commit("exhibitnav/closeMenu");
  },
  computed: {
    viewedStories() {
      return this.$store.state.occupation.viewedStories;
    },

    viewedAll() {
      if (this.viewedStories.length === this.stories.length) {
        return true;
      } else {
        return false;
      }
    },
    finishedOnce() {
      return this.$store.state.occupation.finishedOnce;
    },
  },
  methods: {
    showInstructionsModal() {
      this.showInstructions = true;
    },
    hideInstructionsModal() {
      this.showInstructions = false;
    },
    resetMap() {
      this.$store.commit("occupation/resetMap");
      this.hideInstructionsModal();
    },
  },
};
</script>

<style>
</style>