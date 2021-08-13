<template>
  <section>
    <div v-if="content">
      <div v-if="content.activities">
        <ul>
          <li v-for="item in content.activities" :key="item.id">
            <nuxt-link
              :to="`/sections/activity/${sections.activeSection}-${item.id}`"
              >{{ item.name }}
              <qrcode-vue
                :value="`${$store.state.siteInfo.siteUrl}/sections/${sections.activeSection}/${sections.activeSection}-${item.id}`"
                size="300"
              />
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>


<script>
import { mapState } from "vuex";
import QrcodeVue from "qrcode.vue";
export default {
  props: {
    content: Object,
  },
  components: {
    QrcodeVue,
  },
  computed: {
    ...mapState(["sections"]),
  },
};
</script>
