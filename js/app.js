console.log('Roger that js!');

// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
var currentTurn = 'X';
// create event listener on #board
// use element target to specify if a box has been clicked

  var boxClick = $('.box');
  boxClick.on('click', drawX);

  function drawX(event) {
    if ($(this).text() === '') {


    $(this).text(currentTurn);
    if (currentTurn === 'X') {
      currentTurn = 'O'
    } else {
      currentTurn = 'X'
    }
  } else {
    console.log('Hey, no cheating!')
  }
    // function checkIfClicked(x) {
    //   if (boxClick === 'X' || boxClick === 'O'){
    //     console.log('Hey, no cheating!')
    //   }
    }

    $(boxClick).on("click", function handleClick(alreadyClicked){
    alreadyClicked.preventDefault();
    // more code down here
    });

// reset all to empty
// empty and set currentTurn to X.
$(".btn-primary").click(function() {
  $('.box').empty();
  currentTurn = 'X';
});

/// All jquery above this line
});
