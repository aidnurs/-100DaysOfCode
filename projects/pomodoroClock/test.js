window.onload = function() {
  var audio = $('audio')[0];
  var breakTime = 5;
  var countTime = 1;
  var seconds = 0;
  var pause = false;
  var counting;
  function countdown() {
    if (countdown === 0 && seconds === 1) {
      audio.play();
    }
    if (countdown === 0 && seconds === 0) {
      $('.title').html('Break');
      countTime=breakTime;
    }
    if (seconds === 0) {
      seconds = 60;
      countTime--;
    }
    seconds--;
    $('.timer').html(countTime + ':' + seconds);
  }
  $('.timer').html(countTime + ':00');
  $('#minusBreak').click(function() {
    if (pause === false) {
      if (breakTime > 1) {
        breakTime--;
        $('#break').html(breakTime);
      }
    }
  });
  $('#plusBreak').click(function() {
    if (pause === false) {
      breakTime++;
      $('#break').html(breakTime);
    }
  });
  $('#minusCount').click(function() {
    if (pause === false) {
      if (countTime > 1) {
        countTime--;
        $('#count').html(countTime);
        $('.timer').html(countTime + ':00');
        seconds = 0;
      }
    }
  });
  $('#plusCount').click(function() {
    if (pause === false) {
      countTime++;
      $('#count').html(countTime);
      $('.timer').html(countTime + ':00');
      seconds = 0;
    }
  });
  $('.clock').click(function() {
    if (pause === false) {
      counting = setInterval(countdown, 100);
      pause = true;
    } else {
      clearInterval(counting);
      pause = false;
    }
  });
};
