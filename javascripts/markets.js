
console.log("map loaded!")
var map

function initializeMap(){
var defaultCenter = new google.maps.LatLng(41.893974, -87.627945);

var defaultOptions = {
  zoom: 12,  //this was 14
  center: defaultCenter,
  mapTypeId: google.maps.MapTypeId.ROADMAP
}

map = new google.maps.Map(document.getElementById('map'), defaultOptions);


  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'Location found using HTML5.'
      });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }

  function handleNoGeolocation(errorFlag) {
    if (errorFlag) {
      var content = 'Please turn on Location Services.';
    } else {
      var content = 'Error: Your browser doesn\'t support geolocation.';
    }

    var options = {
      map: map,
      position: defaultCenter,
      content: content
    };
  }
}

var geocoder = new google.maps.Geocoder();
var addresscode;
var image = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';

function codeAddress() {
  var address = document.getElementById("address").value;
  // var day = document.getElementById("day").value;

  if(address && (day==false)){
    geocoder.geocode( { "address": address}, function(results, status) {
      console.log(results[0].geometry.location);
      addresscode=results[0].geometry.location
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        map.setZoom(16);
        var locationIcon = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
            icon: image
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }
  else if(day && (address==false)){
    for (var i = 0; i < markets.length; i++) {
      if (markets[i].day == day) {
        map.setZoom(15);
      //here is where we want to call some function that deletes all of the current markers
        //makes marker for each data point
          var marker = new google.maps.Marker({
            position: new google.maps.LatLng(markets[i].latitude, markets[i].longitude),
            map: map,
            intersection: markets[i].intersection,
            day: markets[i].day,
            start: markets[i].start_time,
            end: markets[i].end_time,
            icon: image
          });

        //assigns click event to each one
          // google.maps.event.addListener(marker, 'click', (function(marker, i) {
          // return function() {
          //   console.log(marker.intersection)
          //   $("#saved").append("<li>"+ marker.intersection +"  "+ marker.day + "</li>" +" time: "+ "</li>"  +marker.start + " - "+ marker.end);
          // }
          // })(marker, i));
          console.log(markets[i])

        };
        //we need to pass in the pass in what we have in market data into a new function that creates different markers that only will render if the day matches what you placed in the field to the object's day
    }
  }
}




  google.maps.event.addDomListener(window, 'load', initializeMap);
