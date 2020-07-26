let map;



// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBUy82OhNZYJtvWWjw-9jt-TUKrEczafeI&callback=initMap';
script.defer = true;
script.async = true;

// Attach your callback function to the `window` object
window.initMap = function() {
    var myLatLng = {lat: 27.7069342, lng: 85.3767583};
    
    map = new google.maps.Map(document.getElementById("map"), {
        center: myLatLng,
        zoom: 18,
        options: {
            gestureHandling: 'greedy'
          }
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        draggable:true,
        title:"Drag me!"
      });
};

// Append the 'script' element to 'head'
document.head.appendChild(script);