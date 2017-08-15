
function game() {
  var newDiv;
  var yetiDiv;
  var c=1;
  var randomPenguin=Math.floor(Math.random()*9)+1;
  for (var i = 1; i <= 9; i++) {
    if(i===randomPenguin){
      yetiDiv=document.createElement('div');
      yetiDiv.classList.add('yeti');
      yetiDiv.id="notPenguin";
      document.getElementById('gameholder').appendChild(yetiDiv);
    }else{
      newDiv=document.createElement('div');
      newDiv.classList.add('penguin1');
      newDiv.id=c;
      c++;
      document.getElementById('gameholder').appendChild(newDiv);
    }
  }
}

function afterLoad() {
  for (var i = 1; i < 9; i++) {
    document.getElementById(`${i}`).onclick=changeImage;
  }
  var changedY=document.getElementById('notPenguin');
  changedY.onclick=changeY;
}
function changeImage() {
  this.classList.add("penguinEnd");
  this.classList.remove("penguin1");
}
function changeY() {
  this.classList.add("yetiEnd");
  this.classList.remove("yeti");
  window.alert("Yaaaarrrr!!!");
  youWin();
}

function youWin() {
  var titleDiv;
  document.getElementById('gameholder').innerHTML = '';
  //new page
  titleDiv=document.createElement('div');
  titleDiv.id="title";
  document.getElementById('gameholder').appendChild(titleDiv);
  var winText=document.createElement('h1');
  winText.innerHTML="Looser!";
  winText.id='winTextStyle'
  document.getElementById('gameholder').appendChild(winText);
  document.body.style.margin="-120px";
  var anotherDiv=document.createElement('div');
  anotherDiv.id='wrapper'
  document.getElementById('gameholder').appendChild(anotherDiv);
  var butt=document.createElement('button');
  butt.innerHTML="NEW GAME";
  document.getElementById('wrapper').appendChild(butt);
  butt.onclick=function newGame() {
    location.reload();
  }
}
