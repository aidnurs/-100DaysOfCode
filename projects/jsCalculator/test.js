window.onload=function(){
  var input="";
  var currentNumber=0;
  var arr=[];
  $('.numbers').click(function() {
    input+=$(this).text();
    console.log(input);
  });
  $('#equal').click(function() {

  });
  $(".operators").click(function() {
    currentNumber=Number(input);
    arr.push(currentNumber);
    input="";
    console.log(arr);
  })
};
