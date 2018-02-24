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

/*          //using switch statements
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
} */
//back-end code
var pingPongNum = [];

function ping(number){
    for (var i = 1; i <= number; i+=1){
// Start with 15 so that when it goes through the loop assissing each number it eveluate 15 and returns Ping-Pong instead of just Ping and/or Pong since 15 is divisible by
//both 3 and 5.
        if(i % 15 === 0){
            pingPongNum.push("Ping-Pong");
        }
        else if(i % 5 === 0){
            pingPongNum.push("Pong");
        }
        else if(i % 3 === 0){
            pingPongNum.push("Ping");
        }
        else{
          //in the event that the number is not divisible by 3, 5 or 15 then return the number itself.
            pingPongNum.push(i);
        }
    }
}
