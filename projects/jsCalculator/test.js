window.onload=function(){
  var input="";
  var firstNumber=0;
  var secondNumber=0;
  var operator="";
  var ans=0;
  var text="";
  var nextNumber=false;
  $('.numbers').click(function(){
    /*if (ans) {
      input="";
    }*/
    input+=$(this).text();
    $('#current').html(input);
  });
  $('.operators').click(function(){
    operator=$(this).text();
    firstNumber=Number(input);
    input="";
  });
  $('#equal').click(function() {
    secondNumber=Number(input);
    input="";
    switch (operator) {
      case '/':
        ans=+(firstNumber/secondNumber).toFixed(6);
        break;
      case '*':
        ans=firstNumber*secondNumber;
        break;
      case '+':
        ans=firstNumber+secondNumber;
        break;
      case '-':
        ans=firstNumber-secondNumber;
        break;

      default:break;
    }
    input=ans.toString();
    $('#current').html(ans);
  });
  $('#C').click(function() {
    input="";
    firstNumber=0;
    secondNumber=0;
    ans=0;
    operator="";
    $('#current').html(ans);
  });
};
