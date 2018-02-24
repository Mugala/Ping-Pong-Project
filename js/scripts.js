//front-end code
$(document).ready(function(){
   $("form#ping-pong").submit(function(){
      event.preventDefault();
      var number = parseInt($("input#number").val());

      ping(number);

      pingPongNum.forEach(function(number){
         $("#output").append('<li>' + number + '</li>');
      });
   });
});
