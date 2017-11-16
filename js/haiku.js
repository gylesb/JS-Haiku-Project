export class Haiku
constructor (lineOne, lineTwo, lineThree) {
  this.lineOne = lineOne;
  this.lineTwo = lineTwo;
  this.lineThree = lineThree;
}

function lineOneCheck() {
  let IsHaiku = false;
  var syllable = require('syllable');
  // var count = lineOne.length
  var lineOneSyllable = syllable(lineOne)
  if (syllable == 5) {
    IsHaiku = true;
  }
  if (lineOne != "") {
    IsHaiku = true;
  }
}

function lineTwoCheck() {
  let IsHaiku = false;
  var syllable = require('syllable');
  // var count = lineTwo.length
  var lineTwoSyllable = syllable(lineTwo)
  if (syllable == 7) {
    IsHaiku = true;
  }
  if (lineTwo != "") {
    IsHaiku = true;
  }
}

function lineThreeCheck() {
  let IsHaiku = false;
  var syllable = require('syllable');
  // var count = lineThree.length
  var lineThreeSyllable = syllable(lineThree)
  if (syllable == 5) {
    IsHaiku = true;
  }
}
