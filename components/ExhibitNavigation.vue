<template>
  <div class="exhibit-navigation" :class="isHidden ? 'hide-nav' : 'show-nav'">
    <nav v-if="sections">
      <!-- <button @click="toggleExpanded">
        <span v-if="isExpanded">Close Nav</span>
        <span v-else>Open Nav</span>
      </button> -->
      <ul v-show="isExpanded" class="nav-items">
        <li
          v-for="(item, index) in sections"
          :key="index"
          :class="
            item.slug === activeSection.slug
              ? `nav-item-active nav-item nav-item-${item.id}`
              : `nav-item nav-item-${item.id}`
          "
        >
          <span class="nav-item-text">
            <!-- <nuxt-link :to="`/exhibit/${item.slug}`" class="nav-item-text"> -->
            {{ capitalizeFirstLetter(item.slug) }}
          </span>
          <!-- </nuxt-link> -->
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("exhibitnav/activateSection", this.activeSection);
  },
  watch: {
    routeSlug() {
      this.$store.commit("exhibitnav/activateSection", this.activeSection);
    },
  },
  computed: {
    isExpanded() {
      return this.$store.state.exhibitnav.isExpanded;
    },
    isHidden() {
      return this.$store.state.exhibitnav.isHidden;
    },
    sections() {
      return this.$store.state.sections.sections;
    },
    routeSlug() {
      const pathStart = "/exhibit/";
      const fullPath = this.$route.fullPath;

      let routeSlug = fullPath.replace(pathStart, "");
      const slashCount = routeSlug.split("/").length - 1;
      for (let i = 0; i < slashCount; i++) {
        routeSlug = routeSlug.split("/")[0];
      }

      return routeSlug;
    },
    activeSection() {
      if (!this.sections || !this.routeSlug) {
        return;
      }
      if (this.sections.length < 1) {
        return;
      }
      if (!this.sections[0].slug) {
        return;
      }
      return this.sections.filter(
        (section) => section.slug === this.routeSlug
      )[0];
    },
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleExpanded() {
      this.$store.commit("exhibitnav/toggleMenu");
    },
  },
};
</script>
