import {Haiku} from './../js/haiku.js';

// $(function(){
// $(".formOne").submit(function(event){
//   event.preventDefault();
//
//   var userInput = $("#input").val().toUpperCase();
//   let match;
//   const lineCheck = userInput.match(/\r|\n/g);
//   if (lineCheck === null)
//   {
//     match = 0;
//   } else {
//     match = lineCheck.length;
//   }
//
//   if(match === 2){
//
//     var haikuChecker = new Haiku();
//     var output=haikuChecker.checkHaiku(userInput);
//     $("#output").text("It is a Haiku!!!");
//     }
//   else {
//     alert("Not a Haiku");
//   }
//
// });
// });


$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const haiku = [];

    let lineOne = $("#lineOne").val();
    let lineTwo = $("#lineTwo").val();
    let lineThree = $("#lineThree").val();

    haiku.push ([lineOne, lineTwo, lineThree]);
  });

  let userInput = new Haiku();
  let resultLine = userHaiku.CheckLines();
  let resultSyllables = userHaiku.CheckSyllables();


  if (resultLine == true && resultSyllables == true ) {
    $("#output").text("Congrats! This is a Haiku.");
  } else {
    $("#output").text("I am sorry. This is not a proper Haiku. Better luck next time :)");
  }
});
