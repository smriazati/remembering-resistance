<template>
  <div class="photo-feed">
    <ContentLightbox v-for="(item, index) in media" :key="index" :img="item" />
    <!-- <figure v-for="(item, index) in media" :key="index" class="photo-feed-item">
      <img :src="item.src" :alt="item.alt" />
      <figcaption v-if="item.caption">{{ item.caption }}</figcaption>
    </figure> -->
  </div>
</template>


<script>
export default {
  props: {
    media: Array,
  },
};
</script>