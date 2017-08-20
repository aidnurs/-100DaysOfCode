$(document).ready(function() {
  $('button').click(function() {
    var a=$('button').attr("value");
    console.log(a);
    $("#answer").html();
  })
});
