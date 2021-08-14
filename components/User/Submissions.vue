<template>
  <div class="" :class="isHidden ? 'hide-submissions' : 'show-submissions'">
    <div v-if="isExpanded" class="submissions-container">
      <div v-if="isEditing && editingTalkback">
        <ContentTalkback
          :promptId="editingTalkback"
          :isSubmissions="true"
          @close-editor="collapseEditor"
        />
      </div>
      <div v-if="!isEditing">
        <div class="submissions-list" v-if="requiredSubmissions.length > 1">
          <header>
            <div class="label">
              <span class="text-decoration"></span>
              <h1>
                <span v-if="userName">{{ userName }}'s</span> Submissions
              </h1>
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
              <button @click="editResponse(item.id)">
                <span>Edit response</span>
              </button>
            </div>
            <div v-else class="not-unlocked">
              <p>Not unlocked yet!</p>
            </div>
          </section>
          <footer>
            <div v-if="!submittedFinalAnswers">
              <button
                :disabled="!submissionsComplete"
                @click="submitFinalResponses"
              >
                <span>Submit your responses</span>
              </button>
            </div>
            <div v-else>
              <p>
                Nice work. You submitted your answers.
                <button class="flat inline-block" @click="closeSubmissions">
                  <span>Close submissions</span>
                </button>
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
    <div v-else class="submissions-toggle">
      <!-- <button @click="openSubmissions"><span>Show submissions</span></button> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEditing: false,
      editingTalkback: null,
      submittedFinalAnswers: false,
    };
  },
  computed: {
    userName() {
      return this.$store.state.sessionInfo.name;
    },
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
    editResponse(id) {
      this.isEditing = true;
      this.editingTalkback = id;
      // this.$store.commit("submissions/closeSubmissions");
    },
    collapseEditor() {
      this.isEditing = false;
      this.editingTalkback = null;
    },
    submitFinalResponses() {
      this.submittedFinalAnswers = true;
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
