import {Haiku} from './../js/haiku.js';

$(document).ready(function() {
  $("button#newHaiku").click(function(event) {
    event.preventDefault();
    console.log('hello you are in Haiku');

    var autoHaiku = new Haiku();
    let ipAddress = autoHaiku.GenerateIP();
    console.log(ipAddress);

    let newHaiku = autoHaiku.DecodeIP(ipAddress);
    console.log(newHaiku);
    $("#output").text(newHaiku);

  });

});
