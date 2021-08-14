export default {
    methods: {
        initAnimations() {
            const windowHeight = window.innerHeight;
            const wrapper = this.$refs.story;
            if (!wrapper) {
                console.log('cancelling story animations, no wrapper ref');
            }
            if (wrapper) {
                gsap.set(wrapper, {
                    opacity: 0,
                    yPercent: 100
                })
                gsap.to(wrapper, {
                    opacity: 1,
                    yPercent: 0,
                    duration: 0.5
                })
            }
        }
    }
}
