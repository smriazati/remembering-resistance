<template>
  <div class="talkback">
    <div
      class="talkback-wrapper"
      :class="submittedResponse ? 'is-submitted' : 'is-editing'"
    >
      <div class="label">
        <span class="text-decoration"></span>
        <h1>{{ thisTalkback.headline }}</h1>
      </div>
      <div v-if="!submittedResponse">
        <div v-if="isTalkbackLoaded">
          <p>{{ thisTalkback.prompt }}</p>
          <textarea
            v-model="submissionText"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button
            :disabled="!submissionText"
            type="submit"
            @click="submitResponse"
          >
            <span> Submit</span>
          </button>
          <button
            v-if="thisTalkback.storyPath && !this.isSubmissions"
            @click="goBackToStory"
          >
            <span> Need help? Go back</span>
          </button>
        </div>
      </div>
      <div v-if="submittedResponse">
        <div class="response-wrapper">
          <h2>Your response</h2>
          <p>{{ thisTalkback.response }}</p>
        </div>
        <div class="navigation">
          <button @click="editResponse"><span>Edit</span></button>
          <button @click="deleteResponse"><span>Delete</span></button>
          <button @click="openSubmissions">
            <span>View all submissions</span>
          </button>
          <button v-if="!this.isSubmissions">
            <nuxt-link :to="`/exhibit/${thisTalkback.next}`">
              Go to next
            </nuxt-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    promptId: {
      type: String,
      required: true,
    },
    isSubmissions: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      submissionText: null,
      tempReponse: null,
      isEditing: false,
    };
  },

  computed: {
    thisTalkback() {
      const list = this.$store.state.submissions.requiredSubmissions;
      let theArr = [];
      for (let i = 0; i < list.length; i++) {
        if (list[i].id === this.promptId) {
          theArr.push(list[i]);
        }
      }
      return theArr[0];
    },
    hasResponse() {
      if (this.thisTalkback.response === null) {
        return false;
      } else {
        return true;
      }
    },
    isTalkbackLoaded() {
      if (this.thisTalkback) {
        return true;
      } else {
        return false;
      }
    },
    finishedExhibitOnce() {
      return this.$store.state.exhibitnav.finishedExhibitOnce;
    },

    submittedResponse() {
      if (this.hasResponse) {
        return this.thisTalkback.response;
      } else {
        return null;
      }
    },
    newSubmission() {
      return { submission: this.submissionText, id: this.promptId };
    },
  },
  mounted() {
    this.$store.commit("submissions/unlockTalkback", this.promptId);
  },
  methods: {
    goBackToStory() {
      if (this.isEditing) {
        this.$store.commit("submissions/submitResponse", this.newSubmission);
      }
      this.$router.push(this.thisTalkback.storyPath);
    },
    goToNext() {},
    openSubmissions() {
      if (this.isSubmissions) {
        // on final submissions page -
        this.$emit("close-editor");
      } else {
        this.$store.commit("submissions/openSubmissions");
      }
    },
    submitResponse() {
      this.$store.commit("submissions/submitResponse", this.newSubmission);
      this.submissionText = null;
      this.tempReponse = null;
      if (this.isEditing) {
        this.isEditing = false;
      }
    },
    deleteResponse() {
      this.$store.commit("submissions/deleteResponse", this.newSubmission.id);
    },
    editResponse() {
      this.isEditing = true;
      this.submissionText = this.thisTalkback.response;
      this.$store.commit("submissions/deleteResponse", this.newSubmission.id);
    },
  },
};
</script>
