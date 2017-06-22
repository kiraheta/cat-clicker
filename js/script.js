var counter = 0;

function incrementClicker() {
  $("#cat").click (function(e){
	counter +=1
	$("#clicks").text(counter);
  });
};

incrementClicker()
