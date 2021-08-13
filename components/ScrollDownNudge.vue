<template>
  <div
    class="scroll-down-nudge"
    :class="isHidden ? 'hide-nudge' : 'show-nudge'"
  >
    <p class="visually-hidden">Scroll down</p>
    <button class="flat">
      <img
        @click="scrollDown"
        src="/icons/arrowDownWhite.png"
        alt="arrow icon indicating scroll down"
      />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHidden: true,
      hasScrolled: false,
      waitSeconds: 5,
    };
  },
  mounted() {
    this.startTimer();
    document.addEventListener("scroll", () => {
      this.hasScrolled = true;
      if (!this.isHidden) {
        this.isHidden = true;
      }
    });
  },
  methods: {
    startTimer() {
      setInterval(this.showNudge, this.waitSeconds * 1000);
    },
    showNudge() {
      if (!this.hasScrolled) {
        this.isHidden = false;
      }
    },
    hideNudge() {
      this.isHidden = true;
    },
    scrollDown() {
      window.scroll({
        top: window.innerHeight,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
