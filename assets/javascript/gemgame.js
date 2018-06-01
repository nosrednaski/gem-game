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
  var hasFinished = false;
  var smallRandom = Math.floor((Math.random()*12)+1);
  var bigRandom = Math.floor(Math.random()*(100 - 35 + 1))+ 35;
  var guess = 0
  
  // each gem is assigned a random number for that game. guess is reset at 0 for each new game. 
  function reset() {
    hasFinished = false;
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
    $( "#guess" ).text(parseInt(guess));
   } 
  
  // ************************ On Clicks ********************************
  $( "#gem1" ).click(function(){
      guess = gem1 + guess;
      updateDisplay();
      checkWin();
      checkLoss();
  });
  
  $( "#gem2" ).click(function(){
      guess = gem2 + guess;
      updateDisplay();
      checkWin();
      checkLoss();
  });
  
  $( "#gem3" ).click(function(){
      guess = gem3 + guess;
      updateDisplay();
      checkWin();
      checkLoss();
    });
  
  $( "#gem4" ).click(function(){
      guess = gem4 + guess;
      updateDisplay();
      checkWin();
      checkLoss();
      
  });
   console.log(guess);
  // ******************************** Win **********************************
  function checkWin() {
    if (guess === gemValue) {
        win++;
        hasFinished = true;
        alert("A gem of breathtaking beauty and power! Yours at last.")
        reset();
    }
   }

  
  //******************************** Lose ***********************************
  function checkLoss() {
    if (guess > gemValue) {
        losses++;
        hasFinished = true;
        alert("A fine gem shattered and lost forever...")
        reset();
    }
   }
});