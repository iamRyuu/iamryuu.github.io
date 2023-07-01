if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(success);
}

function success(){
    alert('Su ubicación esta siendo compartida')
}