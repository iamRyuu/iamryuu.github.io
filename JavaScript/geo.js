if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(success);
}

function success(getCurrentPosition){
    alert('Su ubicación esta siendo compartida');

    let coords = GeolocationPosition.coords;
    var lat =coords.lat;
    var lng =coords.lng;
}
