  // ************ Relevent ID's ***********************
  // wins - win counter
  // losses - loss counter
  // gemValue - number the user is trying to match
  // guess - number the user is building 
  
  // **************** This Doc is Ready ************************
$(function(){
    
  // *********** Declare Variables ***********************
  var wins = 0;
  var losses = 0;
  var bigRandom = Math.floor(Math.random()*(100 - 35 + 1))+ 35;
  var gemValue = bigRandom;
  var guess = 0;
  var gem1 = Math.floor((Math.random()*12)+1);
  var gem2 = Math.floor((Math.random()*12)+1);
  var gem3 = Math.floor((Math.random()*12)+1);
  var gem4 = Math.floor((Math.random()*12)+1);
  
  // each gem is assigned a random number for that game. guess is reset at 0 for each new game. 
  function reset() {
    var gemValue = bigRandom;
    var guess = 0; 
    var gem1 = Math.floor((Math.random()*12)+1);
    var gem2 = Math.floor((Math.random()*12)+1);
    var gem3 = Math.floor((Math.random()*12)+1);
    var gem4 = Math.floor((Math.random()*12)+1);
  };
 
  // *********************** Display **********************************
  function updateDisplay() {
    $( "#wins" ).text(wins);
    $( "#losses").text(losses);
    $( "#gemValue" ).text(bigRandom);
    $( "#guess" ).text(guess);
   } 
  
  // ************************ On Clicks ********************************
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

  $(document).click(function(){
      updateDisplay();
      checkWin();
      checkLoss();
  })
  
  // ******************************** Win **********************************
  // Checks for win condition, guess = gemValue. Adds to win count. Sends alert and resets the game. 
  function checkWin() {
    if (guess === gemValue) {
        wins++;
        alert("A gem of breathtaking beauty and power! Yours at last.")
        reset();
    }
   }

  
  //******************************** Lose ***********************************
  // Checks for loss condition, guess > gemValue. Adds to loss count. Sends loss alert and resets game.     
  function checkLoss() {
    if (guess > gemValue) {
        losses++;
        alert("A fine gem shattered and lost forever...")
        reset();
    }
   }
});