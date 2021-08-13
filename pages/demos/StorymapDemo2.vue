<template>
  <div class="demo container">
    <StorymapParent :markers="markers" :stories="stories" />
  </div>
</template>

<script>
import markers from "~/static/media/2/markers.json";
import stories from "~/static/media/2/stories.json";

export default {
  data() {
    return {
      markers: markers,
      stories: stories,
    };
  },
};
</script>

<style>
</style>