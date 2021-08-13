<template>
  <div ref="wrapper" class="introduction story-container">
    <section class="header-image">
      <figure class="image-wrapper">
        <img src="/media/1/yosef-01.png" alt="" />
      </figure>
    </section>
    <section class="story">
      <div class="image-wrapper">
        <img src="/media/1/yosef-02.png" alt="" />
      </div>
      <div class="text-wrapper">
        <div class="title"><h2>Meet Yosef Zilberberg</h2></div>
        <div class="paragraphs">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            scelerisque lorem est, sed iaculis nisl fermentum eu. Nunc mollis
            eros nibh, ut efficitur sem lacinia ac. Pellentesque a ante eu orci
            porttitor scelerisque ut nec risus. Morbi odio odio, scelerisque et
            blandit tempus, lacinia ut elit. Praesent varius nisl non ipsum
            pulvinar semper. Fusce mauris libero, tincidunt ut luctus a,
            consequat ac augue. Integer quam elit, mollis ac metus at, dignissim
            fermentum neque. In sed venenatis dui, at semper neque. Praesent sed
            enim ac purus accumsan tristique consectetur quis odio. Proin lectus
            mi, sagittis eget sem et, tempus consequat risus. Maecenas
            efficitur, leo et egestas placerat, nisi dolor gravida massa, sed
            bibendum turpis nibh nec quam. Phasellus at pretium est. Vestibulum
            accumsan rhoncus eros ac vestibulum.
          </p>
        </div>
      </div>
    </section>
    <section class="story">
      <div class="image-wrapper">
        <img src="/media/1/yosef-03.png" alt="" />
      </div>
      <div class="text-wrapper">
        <div class="paragraphs">
          <p>
            Cras auctor id massa a ultricies. Aenean sed maximus enim, quis
            tristique ipsum. Praesent et ligula egestas, porttitor sapien nec,
            dapibus ex. Curabitur vulputate eget orci vel gravida. Fusce
            suscipit felis arcu. Sed magna enim, maximus ac mattis eu, rhoncus
            in mi. Aenean tortor mauris, dapibus ac ultrices ut, blandit et
            odio. Nulla ac lobortis orci. Phasellus eu pulvinar lectus. Sed
            sapien est, vestibulum at ante a, accumsan aliquam erat. Donec
            efficitur, odio at fermentum congue, risus nunc facilisis massa, sit
            amet iaculis massa diam ac dui. Proin posuere vitae enim sit amet
            feugiat. Mauris molestie nibh odio. Pellentesque tempus ac ipsum
            eget viverra. Vivamus porta interdum tincidunt.
          </p>
        </div>
      </div>
    </section>

    <section class="pull-quote pull-quote-row">
      <div class="image-wrapper">
        <img src="/media/1/yosef-01.png" alt="" />
      </div>
      <div class="quote-wrapper">
        <blockquote>
          <p>
            Donec efficitur, odio at fermentum congue, risus nunc facilisis
            massa, sit amet iaculis massa diam ac dui. Proin posuere vitae enim
            sit amet feugiat.
          </p>
        </blockquote>
        <p class="attribution">Vivamus porta interdum tincidunt</p>
      </div>
    </section>
    <section class="story">
      <div class="image-wrapper">
        <img src="/media/1/all-05.png" alt="" />
      </div>
      <div class="text-wrapper">
        <div class="paragraphs">
          <p>
            Cras auctor id massa a ultricies. Aenean sed maximus enim, quis
            tristique ipsum. Praesent et ligula egestas, porttitor sapien nec,
            dapibus ex. Curabitur vulputate eget orci vel gravida. Fusce
            suscipit felis arcu. Sed magna enim, maximus ac mattis eu, rhoncus
            in mi. Aenean tortor mauris, dapibus ac ultrices ut, blandit et
            odio. Nulla ac lobortis orci. Phasellus eu pulvinar lectus. Sed
            sapien est, vestibulum at ante a, accumsan aliquam erat. Donec
            efficitur, odio at fermentum congue, risus nunc facilisis massa, sit
            amet iaculis massa diam ac dui. Proin posuere vitae enim sit amet
            feugiat. Mauris molestie nibh odio. Pellentesque tempus ac ipsum
            eget viverra. Vivamus porta interdum tincidunt.
          </p>
        </div>
      </div>
    </section>
    <section class="pull-quote">
      <div class="image-wrapper">
        <img src="/media/1/all-04.png" alt="" />
      </div>
      <div class="quote-wrapper">
        <div class="paragraphs">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            scelerisque lorem est, sed iaculis nisl fermentum eu. Nunc mollis
            eros nibh, ut efficitur sem lacinia ac. Pellentesque a ante eu orci
            porttitor scelerisque ut nec risus. Morbi odio odio, scelerisque et
            blandit tempus, lacinia ut elit. Praesent varius nisl non ipsum
            pulvinar semper.
          </p>
        </div>
      </div>
    </section>
    <footer class="call-to-action">
      <StoryCallToAction nextLink="/exhibit/occupation" />
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
