import {Haiku} from './../js/haiku.js';

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var lineOne = $("#lineOne").val();
    var lineTwo = $("#lineTwo").val();
    var lineThree = $("#lineThree").val();
    var vowels = ["a", "A", "e", "E", "i", "I", "u", "U", "o", "O"];
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var stringOne = lineOne.split(" ")
    var stringTwo = lineTwo.split(" ")
    var stringThree = lineThree.split(" ")
    var num = 0;
    var value = true;
    var valueTwo = true;
    var words = [];
    var newString = [];
    var syllable = require('syllable');

    string.forEach(function(str) {
      words.push(str);
    });

    // Numbers
    words.forEach(function(word){
      value = true;
      valueTwo = true;

      if(word.charAt(0) === )
    });

  });
});
