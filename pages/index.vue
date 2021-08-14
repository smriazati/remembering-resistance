<template>
  <div class="exhibit-intro-page">
    <div
      class="background-overlay cover-bg"
      :style="`
        background-image: url('https://res.cloudinary.com/dn8rmd4ql/video/upload/v1628906458/remembering-resistance-videos/tree-v1_g35ibo.jpg');
      `"
    ></div>
    <div class="text-wrapper center">
      <h1>Remembering Resistance</h1>
      <p>
        This exhibit is called Remembering Resistance. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Etiam quam nibh, scelerisque id
        dapibus vitae, consectetur ac ante. Proin ultrices non ipsum vel cursus.
        In mi tellus, imperdiet nec ipsum in, dapibus luctus libero.
      </p>
      <form class="session-entry-form">
        <h2>Introduce yourself</h2>
        <label class="visually-hidden" for="name">What's your name?</label>
        <input
          v-model="name"
          id="name"
          placeholder="What's your name?"
          type="text"
        />

        <button :disabled="!name" type="submit" @click="submitForm">
          <span>Enter Exhibit</span>
        </button>
      </form>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      name: null,
      sessionCode: null,
    };
  },
  computed: {
    submittedName() {
      return this.$store.state.sessionInfo.name;
    },
    hasSession() {
      if (this.$store.getters["sessionInfo/hasSession"]) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    submitForm() {
      this.$store.commit("sessionInfo/setName", this.name);
      this.$store.commit("sessionInfo/setSessionCode", this.sessionCode);
      this.name = null;
      this.sessionCode = null;
      this.$router.push("/exhibit/introduction");
    },
    deleteName() {
      this.$store.commit("sessionInfo/setName", null);
    },
  },
};
</script>
