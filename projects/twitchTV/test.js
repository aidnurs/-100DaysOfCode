var streams=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];

function load() {

  var url;
  var newImg;
  var newDiv;
  var st;
  var current;
  for (var i = 0; i < streams.length; i++) {
    url="https://wind-bow.gomix.me/twitch-api/channels/"+streams[i];
    $.getJSON(url+'?callback=?',function(data){
      console.log(data);
      newDiv=document.createElement('div');
      newDiv.classList.add('row');
      newDiv.classList.add('boxes');
      newDiv.id=data.name;
      if(data.stream){
        current=data.status;
      }else{
        current="Offline";
        newDiv.classList.add('offlineClass');
      }
      newDiv.innerHTML=
        '<div class="col-sm-4">'+
          '<img src="'+data.logo+'">'+
          '<a href="'+data.url+'"target="_blank">'+data.name+
          '</a>'+
          '</div>'+
        '<div class="col-sm-8">'+current+'</div>';
      document.getElementById('mainBox').appendChild(newDiv);
    });
  }
  $("#online").click(function(){
    $(".offlineClass").hide();
  });
  $("#all").click(function(){
    $(".offlineClass").show();
  });
}



/*function load() {
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
*/
