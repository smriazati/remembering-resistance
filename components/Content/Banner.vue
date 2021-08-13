<template>
  <div class="banner">
    <h1 v-if="h1">{{ h1 }}</h1>
    <h2 v-if="h2">{{ h2 }}</h2>
    <h3 v-if="h3">{{ h3 }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    h1: {
      required: false,
      type: String,
    },
    h2: {
      required: false,
      type: String,
    },
    h3: {
      required: false,
      type: String,
    },
    media: {
      required: false,
      type: Object,
    },
  },
};
</script>
