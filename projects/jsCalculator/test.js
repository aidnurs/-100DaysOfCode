window.onload=function() {
  var current=0;
  var total=0;

  var arr1=document.querySelectorAll('button');
  console.log(arr1);
  arr1.forEach(function(a) {
    a.addEventListener('click', function(elem) {
      current=parseInt(a.id);
      console.log(current);
      console.log(typeof(current));      document.getElementById('currentResult').innerHTML=current;
      });
      document.getElementById('result').innerHTML=total;

  });
  /*a.forEach(a=>a.addEventListener('click', function() {
    console.log(1);
  }););*/

}
