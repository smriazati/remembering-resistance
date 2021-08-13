<template>
  <div class="container">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="text-wrapper">
          <p>
            Instructions for in-person activity. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nam vitae nisi vitae leo aliquet
            suscipit ac ut dui. Donec a urna posuere, auctor sapien vitae,
            semper eros. Duis et cursus nulla. Donec erat felis, lobortis ac
            ornare vitae, maximus molestie augue. Donec non risus urna. Vivamus
            sit amet enim id tellus facilisis dapibus sit amet in est. Donec ac
            ex porta, blandit diam semper, venenatis libero.
          </p>
        </div>
        <div class="call-to-action">
          <button @click="resetExhibit">
            <span>Start exhibit again</span>
          </button>
        </div>
      </div>
    </div>
    <div class="submissions">
      {{ $store.state.submissions.submissions }}
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
  },
  mounted() {
    this.$store.commit("exhibitnav/hideNav");
  },
};
</script>
