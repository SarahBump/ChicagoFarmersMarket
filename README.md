# ChicagoFarmers Market
Locate farmers markets in the city of Chicago

A single-page, client-side application that allows users see all of the farmers markets in Chicago.  When a user submits an address, the map zooms in to show the nearest farmers market to their desired location.

##Technologies
JavaScript & JQuery Library
-AJAX GET request to Chicago Open Data retrieves the Address, Neighborhood, and Location coordinates of each farmers market
-The coordinates are passed into a loop that creates a marker for each bike rack and it is appended to a map using the Google Maps API
-A user submits a request for a location and the map centers and zooms on that particlar location using geolocation methods
