
$(function(){
    
  let wins = 0;
  let losses = 0;
  let gemValue = Math.floor(Math.random()*(100 - 35 + 1))+ 35;
  let guess = 0;
  let gem1 = Math.floor((Math.random()*12)+3);
  let gem2 = Math.floor((Math.random()*12)+3);
  let gem3 = Math.floor((Math.random()*12)+3);
  let gem4 = Math.floor((Math.random()*12)+3);
  
  function resetVals() {
    guess = 0
    gem1 = Math.floor((Math.random()*12)+3);
    gem2 = Math.floor((Math.random()*12)+3);
    gem3 = Math.floor((Math.random()*12)+3);
    gem4 = Math.floor((Math.random()*12)+3);
    gemValue = Math.floor(Math.random()*(100 - 35 + 1))+ 35;
  };
 
  function updateDisplay() {
    $( "#wins" ).text(wins);
    $( "#losses").text(losses);
    $( "#gemValue" ).text(gemValue);
    $( "#guess" ).text(guess);
   } 
  
  $( "#gem1" ).click(function(){
      guess += gem1; 
  });
  
  $( "#gem2" ).click(function(){
      guess += gem2 ;
  });
  
  $( "#gem3" ).click(function(){
      guess += gem3;
    });
  
  $( "#gem4" ).click(function(){
      guess += gem4;
  });

  $( "#resetBtn").click(function(){
    resetVals();
  });

  $( "#winBtn").click(function(){
    $("#winModal").hide(400)
  });

  $( "#loseBtn").click(function(){
    $("#loseModal").hide(400);
  });

  $(document).click(function(){
      updateDisplay();
      checkOutcome();
      console.log($(gem1))
      console.log($(gem2))
      console.log($(gem3))
      console.log($(gem4))
      console.log("~~~~~~~~~~~~~~~~~~")
  })
  
  
  function checkOutcome() {
    if (guess === gemValue) {
        wins++;
        $("#winModal").show(400)
        resetVals()
    } else if (guess > gemValue) {
        losses++;
        $("#loseModal").show(400)
        resetVals()
    }
   }
  
});

