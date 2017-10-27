//Google Maps Setup
window.addEventListener('load', function () {
    navigator.geolocation.getCurrentPosition(updatePosition);

    function updatePosition(pos) {
        var position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

        var options = {
            zoom: 15,
            center: position,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map"), options);

        var marker = new google.maps.Marker({
            position: position,
            map: map,
            title: "Это Вы!"
        });
        var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
        var beachMarker = new google.maps.Marker({
            position: { lat: 50.50297339, lng: 30.60777605 },
            map: map,
            title:"Artem Savenko",
            icon: image
        });

        var infowindow = new google.maps.InfoWindow({
            content: "Скорее всего, это Ваше текущее положение"
        });

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });
    }
})