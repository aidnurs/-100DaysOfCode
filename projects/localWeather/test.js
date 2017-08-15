if (navigator.geolocation) {
  window.onload=function(){
    var currentPosition;
    function getCurrentLocation(position){
      currentPosition=position;
      latitude=currentPosition.coords.latitude;
      longitude=currentPosition.coords.longitude;
      //time
      var today=new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      // add a zero in front of numbers<10
      m = checkTime(m);
      document.getElementById('time').innerHTML = h + ":" + m;
      t = setTimeout(function() {
        startTime()
      }, 500);
      //
      $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&units=metric&APPID=cf3058cacde935adb989b6687e543241",function(data){
        var rawJson = JSON.stringify(data);
        var json = JSON.parse(rawJson);
        console.log(json.weather[0].main);
        document.getElementById('adds').innerHTML=json.weather[0].main;
        document.getElementById('temp').innerHTML=json.main.temp+"°";
      });
    }
    navigator.geolocation.getCurrentPosition(getCurrentLocation);
  };
}

function checkTime(i) {
  return (i<10)?(i='0'+i):i;
}
/*

if (navigator.geolocation) {
    window.onload = function(){
    var currentPosition;
    function getCurrentLocation (position) {
        currentPosition = position;
        latitude = currentPosition.coords.latitude;
        longitude = currentPosition.coords.longitude;
        //AJAX request
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=******************", function (data) {
            var rawJson = JSON.stringify(data);
            var json = JSON.parse(rawJson);
            updateWeather(json); //Update Weather parameters
        });
    }
    navigator.geolocation.getCurrentPosition(getCurrentLocation);
    };
  }
  var longitude;
  var latitude;
  function getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }

  function showPosition(position) {
    longitude=position.coords.longitude;
    latitude=position.coords.latitude;
  }*/
