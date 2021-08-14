export default function (context, inject) {
    let isLoaded = false
    let waiting = []

    addScript()
    inject('maps', {
        showMap
    })


    function addScript() {
        const script = document.createElement('script')
        script.src = `https://maps.googleapis.com/maps/api/js?key=${context.env.mapsApi}&libraries=places&callback=initGoogleMaps`
        script.async = true
        window.initGoogleMaps = initGoogleMaps
        document.head.appendChild(script)
    }

    function initGoogleMaps() {
        isLoaded = true
        waiting.forEach((item) => {
            if (typeof item.fn === 'function') {
                item.fn(...item.arguments)
            }
        })
        waiting = []
    }

    // function centerMap(lat, lng) {
    //     const position = new window.google.maps.LatLng(parseFloat(m.lat), parseFloat(m.lng))
    //     console.log(position, lat, lng, 'hi')
    // }

    function showMap(canvas, lat, lng, markers, storymapName) {
        // console.log('here comes the map', canvas, lat, lng, markers)
        if (!isLoaded) {
            waiting.push({
                fn: showMap,
                arguments,
            })
            return
        }
        const mapOptions = {
            mapId: 'bdf928a0003b84ce',
            zoom: 18,
            center: new window.google.maps.LatLng(parseFloat(lat), parseFloat(lng)),
            disableDefaultUI: true,
            zoomControl: false,
            styles: [{
                featureType: 'poi.park',
                elementType: 'labels.icon',
                stylers: [{ visibility: 'off' }]
            }]
        }
        const map = new window.google.maps.Map(canvas, mapOptions)
        // console.log('map', map);
        if (!markers) {
            return
        }

        const bounds = new window.google.maps.LatLngBounds()
        markers.forEach((m) => {
            // console.log(m.id)
            const position = new window.google.maps.LatLng(parseFloat(m.lat), parseFloat(m.lng))
            const marker = new window.google.maps.Marker({
                position,
                label: {
                    text: " ",
                    className: `marker m-${m.id}`,
                },
                // icon: 'https://maps.gstatic.com/mapfiles/transparent.png',
                icon: '/icons/marker.png',
                clickable: true,
            })

            marker.setCursor('pointer')

            marker.addListener("mouseover", () => {
                context.store.commit(`${storymapName}/previewStory`, m.id);
            });


            marker.addListener("mouseout", () => {
                context.store.commit(`${storymapName}/unpreviewStory`);
            });

            marker.addListener("click", () => {
                context.store.commit(`${storymapName}/activateStory`, m.id);
            });



            marker.setMap(map)
            bounds.extend(position)
        })

        const centerButton = document.getElementById("center-button");
        google.maps.event.addDomListener(centerButton, "click", () => {
            map.fitBounds(bounds, 150)
        });

        map.fitBounds(bounds, 150)

    }
}