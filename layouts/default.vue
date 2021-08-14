<template>
  <div class="default-layout" :class="thisRouteClass">
    <div ref="exhibitNav" v-if="isExhibit">
      <ExhibitNavigation key="$route.fullPath" />
    </div>
    <!-- <div v-if="hasSession">
      <ClientOnly> <UserSessionInfo /> </ClientOnly>
    </div> -->
    <UserSubmissions />
    <div class="nuxt-container" :style="`margin-bottom: ${exhibitNavHeight}px`">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      exhibitNavHeight: 0,
    };
  },
  transition: {
    name: "page",
    mode: "in-out",
    afterEnter(el) {
      // reset scroll position
      document.documentElement.scrollTop = 0;
    },
  },
  mounted() {
    if (this.isExhibit) {
      this.$store.commit("sessionInfo/closeMenu");
    }

    // offset margin for height...
    this.setExhibitNavigationMargin();
  },
  watch: {
    $route() {
      this.setExhibitNavigationMargin();
    },
  },
  computed: {
    thisRouteClass() {
      const path = this.$route.fullPath;
      let thisRouteClass;
      if (!this.isExhibit) {
        // not exhibit
        if (path === "/") {
          thisRouteClass = "home";
        } else {
          this.routeClass = path.split("/");
        }
      } else {
        // is exhibit
        thisRouteClass = path.split("/");
      }

      return thisRouteClass;
    },
    isExhibit() {
      if (this.$route.fullPath.includes("/exhibit/")) {
        return true;
      } else {
        return false;
      }
    },
    isBranch() {
      if (this.$route.fullPath.includes("/branches/")) {
        return true;
      } else {
        return false;
      }
    },
    hasSession() {
      if (this.$store.getters["sessionInfo/hasSession"]) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    setExhibitNavigationMargin() {
      const layout = document.getElementById("__layout");
      const layoutHeight = layout.offsetHeight;
      const windowHeight = window.innerHeight;
      // console.log(layoutHeight, windowHeight);
      if (layoutHeight > windowHeight) {
        const exhibitNav = this.$refs.exhibitNav;
        // console.log(
        //   exhibitNav.querySelector(".exhibit-navigation").offsetHeight
        // );
        if (exhibitNav) {
          this.exhibitNavHeight = exhibitNav.querySelector(
            ".exhibit-navigation"
          ).offsetHeight;
        }
      }
    },
  },
};
</script>


<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>

