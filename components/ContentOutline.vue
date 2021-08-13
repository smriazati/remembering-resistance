<template>
  <section>
    <p>{{ outline.description }}</p>
    <ul>
      <li v-for="(item, index) in outline.items" :key="index">
        {{ item.text }}
      </li>
    </ul>
  </section>
</template>


<script>
export default {
  props: {
    outline: Object,
    id: Number,
  },
};
</script>
