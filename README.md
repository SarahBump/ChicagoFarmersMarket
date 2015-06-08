
#INTRODUCTION
This is a Chicago Farmers Market Finder application. The application was built entirely on the client-side using HTML, CSS, javascript, and JQuery. I used Chicago Open Source Data for the information on the markets and the goodlemaps API for the map.
#Screenshots

![Home Page](/Home.png)
![Map Page](/Body.png)


#Challenges
My biggest challenge was rendering the the data onto the map, here is an example of the code I used to do that

```javascript
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
          $("#saved").append("<li>"+ marker.intersection +"  "+ marker.day + "</li>" +" time: "+ "</li>"  +marker.start + " - "+ marker.end);
        }
        })(marker, i));
      };
    }
  });
```
#Version 2
I am currently working on the second version of this application. It will allow you to search by day of the week, only the markets on the respective day of the week will appear on the map.
