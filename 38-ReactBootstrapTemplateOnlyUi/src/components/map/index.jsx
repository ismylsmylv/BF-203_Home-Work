import { useEffect } from 'react';

function Map() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDi2NzafaoVHg_tBt-VMocPFBYSCo1KDZ8&callback=initMap`;
        script.defer = true;
        script.async = true;
        window.initMap = initMap;

        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
            delete window.initMap;
        };
    }, []);

    const initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: 37.7765, lng: -122.4162 },
            zoom: 8,
        });

        new window.google.maps.Marker({
            position: { lat: -34.397, lng: 150.644 },
            map: map,
            title: 'Hello World!',
        });
    };

    return <div id="map" style={{ height: '600px' }}></div>;
}

export default Map