function initMap() {
    let data;
    let client = new XMLHttpRequest();
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: new google.maps.LatLng(-33.88, 151.28),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    let infowindow = new google.maps.InfoWindow();
    client.open('GET', 'map-data.json');
    client.send();
    client.onreadystatechange = function () {
        data = JSON.parse(client.responseText);
        let flightPlanCoordinates = [];
        for (let location of data) {
            let marker = new google.maps.Marker({
                position: new google.maps.LatLng(location.lat, location.lng),
                map: map,
                title: location.name
            });
            google.maps.event.addListener(marker, 'click', (function (marker, location) {
                return function () {
                    infowindow.setContent(`<h3>${location.name}</h3><p>${location.commentaires}</p>`);
                    infowindow.open(map, marker);
                }
            })(marker, location));
            if (location.lat !== 0 && location.lng !== 0) {
                flightPlanCoordinates.push({lat: location.lat, lng: location.lng});
            }
        }
        console.log(flightPlanCoordinates);
        let flightPath = new google.maps.Polyline({
            path: flightPlanCoordinates,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });
        flightPath.setMap(map);
    };
}
