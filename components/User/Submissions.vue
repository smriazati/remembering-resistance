<template>
  <div class="" :class="isHidden ? 'hide-submissions' : 'show-submissions'">
    <div v-if="isExpanded" class="submissions-container">
      <div class="submissions-list" v-if="requiredSubmissions.length > 1">
        <header>
          <div class="label">
            <span class="text-decoration"></span>
            <h1>Submissions</h1>
          </div>
        </header>
        <button class="close-button" @click="closeSubmissions">
          <span>Close</span>
        </button>
        <section v-for="item in requiredSubmissions" :key="item.id">
          <h2>
            <span :class="item.unlocked ? '' : 'not-unlocked'">{{
              item.headline
            }}</span>
          </h2>
          <div v-if="item.unlocked" class="is-unlocked">
            <p><strong> Prompt:</strong> {{ item.prompt }}</p>
            <p><strong> Your answer:</strong> {{ item.response }}</p>
            <button>
              <nuxt-link
                :to="`/exhibit/${item.id}/talkback`"
                @click.native="editResponse"
                >Edit response</nuxt-link
              >
            </button>
          </div>
          <div v-else class="not-unlocked">
            <p>Not unlocked yet!</p>
          </div>
        </section>
        <footer>
          <div>
            <button
              :disabled="!submissionsComplete"
              @click="submitFinalResponses"
            >
              <span>Submit your responses</span>
            </button>
          </div>
        </footer>
      </div>
    </div>
    <div v-else class="submissions-toggle">
      <!-- <button @click="openSubmissions"><span>Show submissions</span></button> -->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isExpanded() {
      return this.$store.state.submissions.isExpanded;
    },
    submissionsComplete() {
      return this.$store.getters["submissions/submissionsComplete"];
    },
    isHidden() {
      return this.$store.state.submissions.isHidden;
    },
    requiredSubmissions() {
      return this.$store.state.submissions.requiredSubmissions;
    },
    submittedSubmissions() {
      return this.$store.state.submissions.submissions;
    },
  },
  methods: {
    editResponse() {
      this.$store.commit("submissions/closeSubmissions");
    },
    submitFinalResponses() {
      console.log("answers are", requiredSubmissions);
    },
    closeSubmissions() {
      this.$store.commit("submissions/closeSubmissions");
    },
    openSubmissions() {
      this.$store.commit("submissions/openSubmissions");
    },
    hideSubmissions() {
      this.$store.commit("submissions/hideSubmissions");
    },
    showSubmissions() {
      this.$store.commit("submissions/showSubmissions");
    },
  },
};
</script>
