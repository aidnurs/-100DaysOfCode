window.onload=function() {
  $('.color').click(function() {
    var currentColor= $(this).attr('id');
    $('.box').click(function() {
      $(this).css("background-color", currentColor);
    })
  })

}
