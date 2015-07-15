var markets =[];
var marketData;


$.ajax({
    method: 'get',
    url: 'https://data.cityofchicago.org/resource/x5xx-pszi.json',
    dataType: 'json',
    success: function(data){
      marketData = data;
      console.log(marketData);

      for (var i = 0; i < marketData.length; i++) {
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(marketData[i].latitude, marketData[i].longitude),
          map: map,
          intersection: marketData[i].intersection,
          day: marketData[i].day,
          start: marketData[i].start_time,
          end: marketData[i].end_time
        });
        markets.push(marker);

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          console.log(marker.intersection)
          $("#saved").prepend("<li>"+ marker.intersection +"  "+ marker.day + "</li>" +" time: "+ "</li>"  +marker.start + " - "+ marker.end);
        }
        })(marker, i));
      };
    }
  });
