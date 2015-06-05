# ChicagoBikeRax
"Waze for bikers" - locate bike racks and bike paths in the city of Chicago

A single-page, client-side application that allows users see all of the 5000+ registered bikeracks in Chicago.  When a user submits an address, the map zooms in to show the five closest bikeracks to their desired location.

##Technologies
JavaScript & JQuery Library
-AJAX GET request to Chicago Open Data retrieves the Address, Neighborhood, and Location coordinates of each bike rack
-The bike coordinates are passed into a loop that creates a marker for each bike rack and it is appended to a map using the Google Maps API
-A user submits a request for a location and the map centers and zooms on that particlar location using geolocation methods
-Bike Path map overlay

##Comin Up Hot
This application is pretty bare bones for now, but some cool features are in the pipeline - we are working on a sinatra application that allows users to drop a pin in a location where a bike rack exists that we don't have in our dataset. The vision is a "waze for bikers," allowing Chicago's growing bike-commuter and cycling community to crowdsource information about safe riding zones, high bike-theft areas where bike racks are located, pot holes, etc.

Users will also be able to save the locations of bike racks, sign in, and toggle on/off the bike path view.
