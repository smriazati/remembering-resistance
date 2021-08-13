<template>
  <div>
    <div v-if="currentSection">
      <h1>{{ currentSection.name }}</h1>
      <main>
        <content-outline :outline="currentSection.outline" />
        <content-display :content="currentSection.content" />
      </main>
      <SectionNav />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const sectionNum = params.id;
    return { sectionNum };
  },
  methods: {
    activateSection(payload) {
      this.$store.commit("sections/activateSection", payload);
    },
  },
  computed: {
    currentSection() {
      return this.$store.state.sections.sections[String(this.sectionNum)];
    },
  },
  mounted() {
    this.activateSection(this.sectionNum);
  },
};
</script>
