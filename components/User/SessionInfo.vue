<template>
  <div class="session-info">
    <div
      v-if="isExpanded"
      class="fixed-bottom-left text-wrapper center bg-gray"
    >
      <h3>Your session info</h3>
      <ul class="flat">
        <li>
          Your name: <strong>{{ submittedName }}</strong>
        </li>
        <li>
          Your session code: <strong>{{ submittedSessionCode }}</strong>
        </li>
      </ul>
      <button @click="closePanel"><span>Close</span></button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    submittedName() {
      return this.$store.state.sessionInfo.name;
    },
    submittedSessionCode() {
      return this.$store.state.sessionInfo.sessionCode;
    },
    isExpanded() {
      return this.$store.state.sessionInfo.isExpanded;
    },
  },
  methods: {
    closePanel() {
      this.$store.commit("sessionInfo/closeMenu");
    },
  },
};
</script>
