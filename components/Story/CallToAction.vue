<template>
  <div class="call-to-action">
    <h3>Where to next?</h3>
    <nav>
      <button class="flat" @click="backToTop">
        <span> <span class="icon">↑</span>Read this story again</span>
      </button>
      <button class="flat" @click="backToTop">
        <nuxt-link :to="`/exhibit/${thisRoute}/branches`">
          <span class="icon">←</span>Back to all stories</nuxt-link
        >
      </button>
      <button class="flat" v-if="talkbackLink">
        <nuxt-link :to="talkbackLink"
          ><span class="icon">→</span>Move on to the talkback</nuxt-link
        >
      </button>
      <button class="flat" v-if="nextLink">
        <nuxt-link :to="nextLink"
          ><span class="icon">→</span>Move on to next section</nuxt-link
        >
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    talkbackLink: {
      type: String,
      required: false,
    },
    nextLink: {
      type: String,
      required: false,
    },
  },
  methods: {
    backToTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
  },
  computed: {
    thisRoute() {
      const splitRoute = this.$route.fullPath.split("/");
      return splitRoute[2];
    },
  },
};
</script>
