
<template>
  <div class="tree-container">
    <header>
      <h1>The Tree of Life</h1>
    </header>

    <section class="page-container">
      <div class="title-wrapper">
        <h2>People who Perished from Tuchyn</h2>
      </div>
      <div v-if="images" ref="gallery" class="gallery">
        <ContentImageGallery :media="images" />
      </div>
    </section>

    <footer>
      <nav>
        <button>
          <nuxt-link to="/submissions">View your submissions</nuxt-link>
        </button>
      </nav>
      <button>
        <nuxt-link to="/exhibit/conclusion/prompt">Finish</nuxt-link>
      </button>
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
    this.importAll(
      require.context("../../../static/media/5/perished/", true, /\.jpeg$/)
    );
    this.$store.commit("exhibitnav/setFinishedExhibitOnce");
  },

  methods: {
    resetExhibit() {},

    importAll(r) {
      r.keys().forEach((key) =>
        this.images.push({ pathLong: r(key), pathShort: key })
      );
    },
  },
};
</script>

<style>
</style>