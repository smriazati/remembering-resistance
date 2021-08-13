<template>
  <div :class="`container branches-menu ${name}`">
    <nav>
      <ul v-if="branches">
        <li v-for="item in branches" :key="item.id" class="branch-item">
          <nuxt-link :to="`/exhibit/${name}/branches/${item.slug}`">
            <div class="text-wrapper">
              <h3>{{ item.name }}</h3>
              <p class="description">
                Sed malesuada urna justo, vitae hendrerit ipsum interdum a.
              </p>
            </div>
            <div class="image-wrapper" v-if="item.featuredMedia">
              <img
                :src="item.featuredMedia.src"
                :alt="item.featuredMedia.alt"
              />
            </div>
            <div v-else class="image-placeholder-wrapper"></div>
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    branches: Array,
    name: String,
  },
};
</script>
