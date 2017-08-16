var streams=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

function load() {
  var url="https://wind-bow.gomix.me/twitch-api/channels/freecodecamp";
  var promise=$.getJSON(url+'?callback=?',function(data){
    console.log(data);
    newImg.src=data.logo;
    newA.target='_blank';
    newA.href=data.url;
    name.innerHTML=data.display_name;
    st.innerHTML=data.status;
  });


  var newImg=document.createElement('img');
  newImg.classList.add("images");
  document.getElementById('mainBox').appendChild(newImg);

  var name=document.createElement('div');
  name.classList.add("names");

  var st=document.createElement('div');
  st.classList.add("statuses");
  document.getElementById('mainBox').appendChild(st);

  var newA=document.createElement('a');
  newA.classList.add('linkes');
  newA.id='link';
  document.getElementById('mainBox').appendChild(newA);
  document.getElementById('link').appendChild(name);
}
