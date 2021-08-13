<template>
  <div ref="wrapper" class="resistance story-container">
    <header class="header">
      <h1>Spiritual Resistance</h1>
    </header>
    <section class="header-image fade-in-section">
      <figure class="image-wrapper">
        <img src="/media/3/spiritual-01.png" alt="" />
      </figure>
    </section>
    <section class="pull-quote">
      <div class="quote-wrapper">
        <blockquote>
          <p>
            Before the sun went down I went to the synagogue. You can imagine
            our feelings on that Kol Nidre eve.
          </p>
          <p>
            Everybody, every man, women, and child, cried with all their their
            strength. We all cried out to G-d, asking him to save our lives, or
            if not our lives, at least the lives of our small, innocent,
            children.
          </p>
          <p>
            This would be our last Kol Nidre in the town’s biggest synagogue,
            &ldquo;Bas‑Ha Midrash&rdquo; (House of the Prophet). I could did not
            sleep that night. Even after having lived through such a tragic day,
            I continued to think about plans to escape. The ghetto’s entrance
            was still open.
          </p>
        </blockquote>
        <p class="attribution">
          English Account of Praying Kol Nidre, Yitzchak Chomut (Laura
          Oberlender’s Father)
        </p>
      </div>
    </section>
    <footer class="call-to-action">
      <StoryCallToAction talkbackLink="/exhibit/resistance/talkback" />
    </footer>
  </div>
</template>


<script>
import animation from "~/mixins/storyAnimations.js";
export default {
  data() {
    return {
      isMounted: false,
    };
  },
  mixins: [animation],
  mounted() {
    this.isMounted = true;
    this.$store.commit("exhibitnav/hideNav");
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
      if (!gsap || !ScrollTrigger || this.initAnimations === undefined) {
        console.log("cancelling animation, no gsap or st or mixin exists");
        return;
      }

      this.initAnimations();
    },
  },
};
</script>
