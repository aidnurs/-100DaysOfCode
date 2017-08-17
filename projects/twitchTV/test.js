var streams=["ESL_SC2","freecodecamp", "RobotCaleb", "noobs2ninjas"];



function load() {
  var url;
  var newImg;
  var newDiv;
  var st;
  for (var i = 0; i < streams.length; i++) {
    url="https://wind-bow.gomix.me/twitch-api/channels/"+streams[i];
    $.getJSON(url+'?callback=?',function(data){
      console.log(data);

      newDiv=document.createElement('div');
      newDiv.innerHTML=data.name;
      newDiv.classList.add('names');
      document.getElementById('mainBox').appendChild(newDiv);

      newImg=document.createElement('img');
      newImg.src=data.logo;
      document.getElementById('mainBox').appendChild(newImg);

      st=document.createElement('div');
      st.innerHTML=data.status;
      st.classList.add("statuses");
      document.getElementById('mainBox').appendChild(st);


    });
  }
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
