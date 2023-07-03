function iniciarMap(){
    var coord = {lat: 12.110583708626425,lng: -86.34107404882353};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 14,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}