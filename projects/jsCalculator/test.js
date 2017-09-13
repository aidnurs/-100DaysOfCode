window.onload=function(){
  var totalNumber=0;
  var currentNumber=0;
  $('button').click(function() {
    if (Number($(this).text())) {
      currentNumber=Number($(this).text());
    }else{
      switch ($(this).text()) {
        case "C":
          totalNumber=0;
          currentNumber=0;
          break;
        case "+":
          totalNumber=totalNumber+currentNumber;
          break;
        case "=":
          $('#current').html(totalNumber);
          break;
        default:

          break;

      }
    }
    $('#current').html(currentNumber);



  });
}
