var counterOne = 0;
var counterTwo = 0;

function incrementClicker() {
  $("#cat1").click (function(e){
	counterOne +=1
	$("#clicks1").text(counterOne);
  });
};

function incrementClickerTwo() {
  $("#cat2").click (function(e){
	counterTwo +=1
	$("#clicks2").text(counterTwo);
  });
};

incrementClicker()
incrementClickerTwo()
