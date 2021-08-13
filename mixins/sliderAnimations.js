export default {
    methods: {
        checkAnimationDependencies() {
            if (!gsap || !ScrollTrigger) {
                console.log("cancelling animation, no gsap or st or mixin exists");
                return;
            }
        },
        getSlides() {
            const windowHeight = window.innerHeight;
            const wrapper = this.$refs.wrapper;
            if (!wrapper) {
                console.log('cancelling story animations, no wrapper ref');
            }
            // console.log(wrapper);
            const slides = gsap.utils.toArray(wrapper.querySelectorAll('.slider-item'));
            if (slides) {
                return slides;
            }
        },
        nextSlideAnimation(slideIndex) {
            // console.log(slideIndex)
            this.checkAnimationDependencies();
            const slides = this.getSlides();
            if (slides) {
                gsap.set(slides[slideIndex], {
                    opacity: 0,
                    x: 100
                })
                gsap.to(slides[slideIndex], {
                    opacity: 1,
                    x: 0,
                    duration: 0.8
                })
            }
        },
        prevSlideAnimation(slideIndex) {
            // console.log(slideIndex)
            this.checkAnimationDependencies();
            const slides = this.getSlides();
            if (slides) {
                gsap.set(slides[slideIndex], {
                    opacity: 0,
                    x: -100
                })
                gsap.to(slides[slideIndex], {
                    opacity: 1,
                    x: 0,
                    duration: 0.3
                })
            }
        }
    }
}
