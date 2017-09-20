window.onload = function() {
  var arr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  var arr1 = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
  var xTurn = true;
  var id;
  var element = 0;
  $('.xoxo').click(function() {
    if ($(this).text()) {
    } else {
      id = Number($(this).attr('id'));
      if (xTurn) {
        $(this).html('x');
        xTurn = false;
        element = 1;
      } else {
        $(this).html('o');
        id = Number($(this).attr('id'));
        xTurn = true;
        element = 0;
      }
      if (id > 0 && id < 4) {
        arr[0][id - 1] = element;
      } else if (id > 3 && id < 7) {
        arr[1][id - 3 - 1] = element;
      } else if (id > 6 && id < 10) {
        arr[2][id - 6 - 1] = element;
      }
    }
    console.log(arr===arr1);
  });

  console.log(arr);
};
