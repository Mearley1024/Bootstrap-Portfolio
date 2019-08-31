
var targetNumber = "random";

$("#number-to-guess").text(targetNumber);

var counter = 0;

var x = document.getElementById("myImg").src;





var numberOptions = [6, 12, 24, 36];
var increment = "";
var random = Math.floor(Math.random() * 12) + 1;


$("#random-button").on("click", function () {
