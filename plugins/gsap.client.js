export default function (context, inject) {
    let isLoaded = false
    let waiting = []

    addGsap();
    addScrollTrigger();

    // if (gsap) {
    //     registerPlugins();
    // }

    function addGsap(path) {
        const script = document.createElement('script')
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js";
        script.async = true
        console.log('adding script', script)
        window.gsap = initGsap;
        console.log('window.gsap', window.gsap)
        document.head.appendChild(script)
    }



    function addScrollTrigger(path) {
        const script = document.createElement('script')
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/ScrollTrigger.min.js";
        script.async = true
        console.log('adding script', script)

        document.head.appendChild(script)
    }


    function initGsap() {
        isLoaded = true
        waiting.forEach((item) => {
            if (typeof item.fn === 'function') {
                item.fn(...item.arguments)
            }
        })
        waiting = []
        console.log(window)
    }

    function registerPlugins() {
        console.log('registering...')
        window.gsap.registerPlugin(window.ScrollTrigger);
        console.log('Registered scroll trigger in GSAP: ', gsap)
    }

}