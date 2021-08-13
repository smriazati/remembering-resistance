<template>
  <div>
    <div class="app-wrapper app-padded-vertical">
      <div ref="map" class="app-map"></div>
    </div>
  </div>
</template>
<script>
export default {
  // props: {
  //     home: {
  //         type: Object,
  //         required: true,
  //     }
  // },
  data() {
    return {};
  },
  mounted() {
    this.$maps.showMap(this.$refs.map, 50.7003356, 26.5719255);
  },
};
</script>