<template>
  <div ref="gallery" class="tree-gallery">
    <div v-for="(item, index) in people" :key="index" class="person-card">
      <div class="card-image-wrapper">
        <img :src="`${item.image}`" :alt="item.name" />
      </div>
      <div class="card-text-wrapper">
        <h3 v-if="item.name" class="name">{{ item.name }}</h3>
        <p v-if="item.location" class="location">{{ item.location }}</p>

        <p v-if="item.relationship" class="relationship">
          {{ item.relationship }}
        </p>
      </div>
    </div>

    <!-- afte rthis is manually repeat -->

    <div
      v-for="(item, index) in people"
      :key="`a-${index}`"
      class="person-card"
    >
      <div class="card-image-wrapper">
        <img :src="`${item.image}`" :alt="item.name" />
      </div>
      <div class="card-text-wrapper">
        <h3 v-if="item.name" class="name">{{ item.name }}</h3>
        <p v-if="item.location" class="location">{{ item.location }}</p>

        <p v-if="item.relationship" class="relationship">
          {{ item.relationship }}
        </p>
      </div>
    </div>
    <div
      v-for="(item, index) in people"
      :key="`b-${index}`"
      class="person-card"
    >
      <div class="card-image-wrapper">
        <img :src="`${item.image}`" :alt="item.name" />
      </div>
      <div class="card-text-wrapper">
        <h3 v-if="item.name" class="name">{{ item.name }}</h3>
        <p v-if="item.location" class="location">{{ item.location }}</p>

        <p v-if="item.relationship" class="relationship">
          {{ item.relationship }}
        </p>
      </div>
    </div>
    <div
      v-for="(item, index) in people"
      :key="`c-${index}`"
      class="person-card"
    >
      <div class="card-image-wrapper">
        <img :src="`${item.image}`" :alt="item.name" />
      </div>
      <div class="card-text-wrapper">
        <h3 v-if="item.name" class="name">{{ item.name }}</h3>
        <p v-if="item.location" class="location">{{ item.location }}</p>

        <p v-if="item.relationship" class="relationship">
          {{ item.relationship }}
        </p>
      </div>
    </div>
    <div
      v-for="(item, index) in people"
      :key="`d-${index}`"
      class="person-card"
    >
      <div class="card-image-wrapper">
        <img :src="`${item.image}`" :alt="item.name" />
      </div>
      <div class="card-text-wrapper">
        <h3 v-if="item.name" class="name">{{ item.name }}</h3>
        <p v-if="item.location" class="location">{{ item.location }}</p>

        <p v-if="item.relationship" class="relationship">
          {{ item.relationship }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    people: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      images: [],
      isMounted: false,
    };
  },

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
      if (!gsap || !ScrollTrigger) {
        console.log("cancelling animation, no gsap or st exists");
        return;
      }

      // console.log("gsap is here", gsap);
      const gallery = this.$refs.gallery;
      if (!gallery) {
        return;
      }
      const scrollElements = gsap.utils.toArray(
        gallery.querySelectorAll(".person-card")
      );
      if (!scrollElements) {
        return;
      }

      // console.log(scrollElements);
      scrollElements.forEach((element) => {
        gsap.set(element, {
          opacity: 0,
          y: 24,
        });

        element.anim = gsap.to(element, {
          paused: true,
          opacity: 1,
          y: 0,
        });
      });

      function staggerPlayBatch(batch) {
        gsap.to(batch, {
          stagger: {
            each: 0.3,
            onStart: function () {
              this.targets()[0].anim.play();
            },
          },
        });
      }

      function staggerReverseBatch(batch) {
        gsap.to(batch, {
          stagger: {
            each: 0.3,
            onStart: function () {
              this.targets()[0].anim.reverse();
            },
          },
        });
      }

      ScrollTrigger.batch(scrollElements, {
        onEnter: staggerPlayBatch,
        onLeave: staggerReverseBatch,
        onEnterBack: staggerPlayBatch,
        onLeaveBack: staggerReverseBatch,
      });
    },
  },
};
</script>

