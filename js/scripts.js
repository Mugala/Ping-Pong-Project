// business logic
var numbersToBePingponged = [];

function pingPong (number){
    for (var index = 1; index <= number; index+=1){
}


  // user interface logic
  $(document).ready(function() {
    $("form#ping-pong").submit(function() {
      event.preventDefault();
      var number = parseInt($("input#num").val());
      var result = leapYear(year);

      pingPong(number);


      $("#result").show();
    });
  });
