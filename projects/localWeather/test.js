var celsius;
var fahrenheit;

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
      $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + latitude +"&lon="+longitude,function(data) {
        var rawJson = JSON.stringify(data);
        var json = JSON.parse(rawJson);
        document.getElementById('icon').src=json.weather[0].icon;
        celsius=document.getElementById('temp').innerHTML=json.main.temp;
        document.getElementById('temp').innerHTML=json.main.temp+'°';
        console.log(json);
      });
    }
    navigator.geolocation.getCurrentPosition(getCurrentLocation);
  };
}

function checkTime(i) {
  return (i<10)?(i='0'+i):i;
}

function toF(){
  fahrenheit=celsius*9/5+32;
  document.getElementById('temp').innerHTML=fahrenheit+'F';
}
