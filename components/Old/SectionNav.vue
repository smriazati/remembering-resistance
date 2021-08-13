<template>
  <nav>
    <nuxt-link
      :to="`/sections/${navOrderPrev}`"
      @click="activateSection(navOrderPrev)"
      >Back</nuxt-link
    >
    <nuxt-link
      :to="`/sections/${navOrderNext}`"
      @click="activateSection(navOrderNext)"
      >Next</nuxt-link
    >
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  methods: {
    activateSection(payload) {
      this.$store.commit("sections/activateSection", payload);
    },
  },
  computed: {
    ...mapState(["sections"]),
    sectionCount() {
      return Object.keys(this.$store.state.sections.sections).length;
    },
    activeSection() {
      if (!this.sections) {
        return null;
      }
      return this.sections.activeSection;
    },
    navOrderNext() {
      if (!this.sectionCount || !this.activeSection) {
        return "";
      }
      let navOrder = null;
      const order = parseInt(this.activeSection);
      if (order === this.sectionCount) {
        navOrder = 1;
      } else {
        navOrder = order + 1;
      }
      return navOrder;
    },
    navOrderPrev() {
      if (!this.sectionCount || !this.activeSection) {
        return "";
      }
      let navOrder = null;
      const order = this.activeSection;

      if (order === 1) {
        navOrder = this.sectionCount;
      } else {
        navOrder = order - 1;
      }
      return navOrder;
    },
  },
};
</script>
