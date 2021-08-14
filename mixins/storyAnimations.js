export default {
    methods: {
        initAnimations() {
            const windowHeight = window.innerHeight;
            const wrapper = this.$refs.wrapper;
            if (!wrapper) {
                console.log('cancelling story animations, no wrapper ref');
            }
            let headerImgs = gsap.utils.toArray(
                wrapper.querySelectorAll("section.header-image")
            );
            if (headerImgs) {
                // console.log(headerImgs);
                function onHeaderEnter(element) {
                    gsap.to(element, {
                        opacity: 1,
                        duration: 3,
                    });
                }
                function onHeaderLeave() {
                    // console.log("bye");
                }

                headerImgs.forEach((element) => {
                    gsap.set(element, {
                        opacity: 0,
                    });
                });

                ScrollTrigger.batch(headerImgs, {
                    // markers: true,
                    onEnter: onHeaderEnter,
                    onLeave: onHeaderLeave,
                    onEnterBack: onHeaderEnter,
                    onLeaveBack: onHeaderLeave,
                });
            }

            const stories = gsap.utils.toArray(
                wrapper.querySelectorAll("section.story")
            );

            if (stories) {
                // .log(stories);

                stories.forEach((story) => {
                    const textBoxes = gsap.utils.toArray(
                        story.querySelectorAll(".text-wrapper")
                    );

                    if (textBoxes) {
                        // console.log(textBoxes);
                        textBoxes.forEach((element) => {
                            gsap.set(element, {
                                y: 300,
                            });

                            gsap.to(element, {
                                y: 0,
                                scrollTrigger: {
                                    trigger: element,
                                    start: `top-=${windowHeight}px top`,
                                    end: "bottom top",
                                    scrub: 0.5,
                                },
                            });
                        });
                    }

                    const imageWrappers = gsap.utils.toArray(
                        story.querySelectorAll(".image-wrapper")
                    );
                    if (imageWrappers) {
                        // console.log(imageWrappers);
                        imageWrappers.forEach((element) => {
                            gsap.set(element, {
                                // opacity: 0,
                                y: `-${windowHeight}`,
                            });

                            gsap.to(element, {
                                y: `${windowHeight}`,
                                // y: 100,
                                opacity: 1,
                                scrollTrigger: {
                                    trigger: story,
                                    start: `top-=${windowHeight / 2} top`,
                                    // start: `top top+=${windowHeight / 2}`,
                                    // start: `top top`,
                                    end: "bottom top",
                                    scrub: 0.5,
                                    // pin: true,
                                    // pinSpacing: false,
                                    // markers: true,
                                },
                            });
                        });
                    }
                });
            }

            const pullQuotesAll = gsap.utils.toArray(
                wrapper.querySelectorAll("section.pull-quote")
            );

            if (pullQuotesAll) {
                // console.log(pullQuotesAll);
                let pullQuoteCols = [];
                let pullQuoteRows = [];
                pullQuotesAll.forEach((quote) => {
                    if (quote.classList.contains("pull-quote-row")) {
                        pullQuoteRows.push(quote);
                    } else {
                        pullQuoteCols.push(quote);
                    }
                });

                if (pullQuoteRows.length) {
                    pullQuoteRows.forEach((quote) => {
                        const quoteChildren = quote.children;
                        if (quoteChildren.length) {
                            for (let i = 0; i < quoteChildren.length; i++) {
                                if (i === 0) {
                                    gsap.set(quoteChildren[i], {
                                        opacity: 0,
                                        // x: "-100%",
                                    });
                                }
                                if (i === 1) {
                                    gsap.set(quoteChildren[i], {
                                        opacity: 0,
                                        y: "20%",
                                    });
                                }

                                gsap.to(quoteChildren[i], {
                                    opacity: 1,
                                    y: 0,
                                    scrollTrigger: {
                                        trigger: quote,
                                        start: `top-=${windowHeight / 2} top`,
                                        end: `top-=${windowHeight / 4} top`,
                                        scrub: 0.8,
                                        // markers: true
                                    },
                                });
                            }
                        }
                    });
                }

                if (pullQuoteCols.length) {
                    pullQuoteCols.forEach((quote2) => {
                        const quoteChildren2 = quote2.children;
                        if (quoteChildren2.length) {
                            for (let i = 0; i < quoteChildren2.length; i++) {
                                if (i === 0) {
                                    gsap.set(quoteChildren2[i], {
                                        opacity: 0,
                                        // x: "-100%",
                                    });
                                }
                                if (i === 1) {
                                    gsap.set(quoteChildren2[i], {
                                        opacity: 0,
                                        y: "30%",
                                    });
                                }

                                gsap.to(quoteChildren2[i], {
                                    opacity: 1,
                                    y: 0,
                                    scrollTrigger: {
                                        trigger: quote2,
                                        start: `top-=${windowHeight / 2}px top`,
                                        end: `top-=${windowHeight / 4}px top`,
                                        scrub: 0.8,
                                        // markers: true
                                    },
                                });
                            }
                        }
                    });
                }
            }

            const cta = wrapper.querySelector(".call-to-action");
            if (cta) {


                gsap.set(cta, {
                    opacity: 0,
                    y: 100
                });

                gsap.to(cta, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: cta,
                        start: `top-=${windowHeight}px top`,
                    },
                });

            }

        }
    }
}
