<template>
  <div
    class="lightbox-wrapper"
    :class="isExpanded ? 'is-expanded' : 'is-collapsed'"
  >
    <div v-if="isExpanded" class="overlay"></div>
    <div v-if="img">
      <figure @click="toggleExpanded">
        <img :src="img.src" :alt="img.alt" />
        <figcaption v-if="img.caption">{{ img.caption }}</figcaption>
      </figure>
    </div>
    <div v-if="src">
      <figure @click="toggleExpanded">
        <img :src="src" />
      </figure>
    </div>

    <button v-if="isExpanded" @click="toggleExpanded">
      <span>Close</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: Object,
      required: false,
    },
    src: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    toggleExpanded() {
      this.isExpanded = !this.isExpanded;
      this.$emit("on-expand-toggle", this.isExpanded);
    },
  },
};
</script>
