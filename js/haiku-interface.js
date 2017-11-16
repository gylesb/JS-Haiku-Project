import {Haiku} from './../js/haiku.js';

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const haiku = [];

    let lineOne = $("#lineOne").val();
    let lineTwo = $("#lineTwo").val();
    let lineThree = $("#lineThree").val();

    haikuPoem.push ([lineOne, lineTwo, lineThree]);
  });

  let userInput = new Haiku();
  let result = userInput.CheckAll();

  if (result = true) {
    $("#result").text("Congrats! This is a Haiku.");
  } else {
    $("#result").text("I am sorry. This is not a proper Haiku. Better luck next time :)");
  }
});
