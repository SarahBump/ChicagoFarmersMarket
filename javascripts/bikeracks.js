$.ajax({
    method: 'get',
    url: 'https://data.cityofchicago.org/resource/x5xx-pszi.json',
    dataType: 'json',
 success: function(data){
        console.log(data);

        for (var i = 0; i < data.length; i++) {
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(data[i].latitude, data[i].longitude),
            map: map,
            intersection: data[i].intersection,
            day: data[i].day,
            start: data[i].start_time,
            end: data[i].end_time
          });

          google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            console.log(marker.intersection)
            $("#saved").append("<li>"+ marker.intersection +"  "+ marker.day + "</li>" +" time: "+ "</li>"  +marker.start + " - "+ marker.end);
          }
          })(marker, i));
        };
      }
  });
