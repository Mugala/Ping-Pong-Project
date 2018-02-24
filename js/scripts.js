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

          //using switch statements
 var pingPongNum = [];

function ping(number){
    for (var i = 1; i <= number; i++){
            switch (number){
        case i % 15 === 0:{
           pingPongNum.push("Ping-Pong");
         }
          break;
        case i % 5 === 0:{
           pingPongNum.push("Pong");
         }
          break;
        case i %  3 === 0:{
           pingPongNum("Ping");
         }
          break;
        default:{
          pingPongNum.push(i);
         break;
}
    }
}
} 
