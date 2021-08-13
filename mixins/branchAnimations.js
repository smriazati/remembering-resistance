export default {
    methods: {
        initAnimations() {
            const windowHeight = window.innerHeight;

            const wrapper = this.$refs.wrapper;
            if (!wrapper) {
                console.log('cancelling branch animations, no wrapper ')
                return
            }

            function slideInFromLeft(element, delay) {
                let theDelay;
                if (delay) {
                    theDelay = delay;
                } else {
                    theDelay = 0
                }
                gsap.set(element, {
                    opacity: 0,
                    x: -300
                })
                gsap.to(element, {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    delay: theDelay
                })
            }
            const header = wrapper.querySelector('header');
            if (header) {
                slideInFromLeft(header)
            }

            const instructions = wrapper.querySelector('section.instructions');
            if (instructions) {
                slideInFromLeft(instructions, 0.5);
            }

            const branches = gsap.utils.toArray(wrapper.querySelectorAll('.branch-item'))
            if (branches) {

                gsap.set(branches, {
                    opacity: 0,
                    y: 100
                })
                gsap.to(branches, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 1.2,
                    stagger: {
                        each: 0.5
                    }
                })
            }
        }
    }
}
