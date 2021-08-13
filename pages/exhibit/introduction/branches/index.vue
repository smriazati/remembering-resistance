<template>
  <div ref="wrapper" class="page-container branch-index resistance">
    <header>
      <div class="label">
        <span class="text-decoration"></span>
        <h2>Introduction</h2>
      </div>
      <h1>Meet the characters</h1>
    </header>
    <section class="instructions">
      <p>
        Explore a section below to meet the characters in this story about
        Tuchyn.
      </p>
    </section>
    <div v-if="branches">
      <BranchesMenu :name="name" :branches="branches" />
    </div>
  </div>
</template>


<script>
import animation from "~/mixins/branchAnimations.js";

export default {
  data() {
    return {
      name: "introduction",
      isMounted: false,
    };
  },
  mixins: [animation],
  mounted() {
    this.isMounted = true;
  },
  watch: {
    isMounted() {
      if (!this.isMounted) {
        return false;
      }
      this.$nextTick(function () {
        this.setAnimations();
      });
    },
  },
  methods: {
    setAnimations() {
      if (!gsap || !ScrollTrigger || this.initAnimations === undefined) {
        console.log("cancelling animation, no gsap or st or mixin exists");
        return;
      }
      this.initAnimations();
    },
  },
  computed: {
    branches() {
      return this.$store.state.introduction.branches;
    },
  },
};
</script>
