
<template>
  <div class="tree-container">
    <header>
      <h1>The Tree of Life</h1>
    </header>

    <section class="page-container">
      <div class="title-wrapper">
        <h2>People who Perished from Tuchyn</h2>
      </div>
      <div v-if="perished" ref="gallery" class="gallery">
        <ContentTreeGallery :people="perished" />
      </div>
    </section>

    <section class="page-container">
      <div class="title-wrapper">
        <h2>Survivors and Descendents</h2>
      </div>
      <div v-if="survivorsDescendents" ref="gallery" class="gallery">
        <ContentTreeGallery :people="survivorsDescendents" />
      </div>
    </section>

    <footer class="cta">
      <div class="call-to-action">
        <nav>
          <button class="flat">
            <nuxt-link to="/exhibit/conclusion/prompt">
              <span class="icon">→</span> Finish</nuxt-link
            >
          </button>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
    };
  },

  mounted() {
    this.$store.commit("exhibitnav/setFinishedExhibitOnce");
  },
  computed: {
    perished() {
      return this.$store.state.conclusion.perished;
    },
    survivorsDescendents() {
      return this.$store.state.conclusion.survivorsDescendents;
    },
  },
  methods: {
    resetExhibit() {},
  },
};
</script>

<style>
</style>