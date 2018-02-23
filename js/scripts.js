// business logic
  var leapYear = function(year) {

  };

  // user interface logic
  $(document).ready(function() {
    $("form#ping-pong").submit(function(event) {
      event.preventDefault();
      var year = parseInt($("input#num").val());
      var result = leapYear(year);

      $(".year").text(year);

      if (!result) {                 // same as writing if (result === false)
        $(".not").text("");
      } else {
        $(".not").text("");
      }

      $("#result").show();
    });
  });
