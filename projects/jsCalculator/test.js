/*$(document).ready(function() {
  $('button').click(function() {
    var a=$('button').attr("value");
    console.log(a);
    $("#answer").html();
  })
});
*/
var current=0;

$(document).ready(function() {
  $('button').click(function() {
    var a=($(this).attr('value'));
    if (isNaN(a)) {
      
      console.log(a);
    }else{
      current=parseInt(a);
      $('#answer').html(current);
      console.log(current);
    }
  })
});
