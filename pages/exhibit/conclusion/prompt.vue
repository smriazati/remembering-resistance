<template>
  <div class="exhibit-intro-page">
    <div
      class="background-overlay cover-bg"
      :style="`
        background-image: url('https://res.cloudinary.com/dn8rmd4ql/video/upload/v1628906458/remembering-resistance-videos/tree-v1_g35ibo.jpg');
      `"
    ></div>
    <div class="text-wrapper center">
      <h1>End of Digital Exhibit</h1>

      <nav class="call-to-action">
        <button @click="resetExhibit">
          <span>Restart Exhibit</span>
        </button>
        <button @click="openSubmissions">
          <span>View your submissions</span>
        </button>
      </nav>
      <div></div>
    </div>
  </div>
</template>



<script>
export default {
  methods: {
    resetExhibit() {
      this.$store.commit("submissions/resetExhibit");
      this.$store.commit("occupation/resetSection");
      this.$router.push("/");
    },
    openSubmissions() {
      this.$store.commit("submissions/openSubmissions");
    },
  },
  mounted() {
    this.$store.commit("exhibitnav/hideNav");
  },
};
</script>
