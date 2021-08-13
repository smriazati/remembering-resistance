<template>
  <div>
    <div v-if="activeActivity">
      <h1>{{ activeActivity.name }}!</h1>
      <p>{{ activeActivity.description }}</p>
      <p>{{ activeActivity.prompt }}</p>
      <nav>
        <nuxt-link :to="`../${sectionNum}`">Back to landing page</nuxt-link>
      </nav>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  async asyncData({ params }) {
    const sectionNum = parseInt(params.activity.split("-")[0]);
    const activityNum = parseInt(params.activity.split("-")[1]);
    console.log(sectionNum);
    return { sectionNum, activityNum };
  },
  computed: {
    ...mapState(["sections"]),
    activeActivity() {
      if (!this.sections.sections[this.sectionNum]) {
        return null;
      }
      return this.sections.sections[this.sectionNum].content.activities[
        this.activityNum
      ];
    },
  },
  methods: {
    activateSection(payload) {
      this.$store.commit("sections/activateSection", payload);
    },
  },
  mounted() {
    this.activateSection(this.sectionNum);
  },
};
</script>
