// var counterOne = 0;
// var counterTwo = 0;
//
// function incrementClicker() {
//   $("#cat1").click (function(e){
// 	counterOne +=1
// 	$("#clicks1").text(counterOne);
//   });
// };
//
// function incrementClickerTwo() {
//   $("#cat2").click (function(e){
// 	counterTwo +=1
// 	$("#clicks2").text(counterTwo);
//   });
// };
//
// incrementClicker()
// incrementClickerTwo()

// premium
var cats = [
	{
		"name": "cat1",
		"pic": "img/cat1.jpg",
		"clicks": 0
	},
	{
		"name": "cat2",
		"pic": "img/cat2.jpg",
		"clicks": 0
	},
	{
		"name": "cat3",
		"pic": "img/cat3.jpg",
		"clicks": 0
	},
	{
		"name": "cat4",
		"pic": "img/cat4.jpg",
		"clicks": 0
	},
	{
		"name": "cat5",
		"pic": "img/cat5.jpg",
		"clicks": 0
	}
];

function createCatList() {
	var toAppend = "";
	$.each(cats, function(catIndex, cat) {
		toAppend += "<li class='cat list-group-item'>" + cat.name + "</li>";
	});
	$("#list").append("<ul class='list-group'>" + toAppend + "</ul>");
}

function displayCat(id) {
	$("#display").empty();
	cat = cats[id];
	var toDisplay = "<div class='container'><div class='name'>" + cat.name +
                  "</div><img src='" + cat.pic +
                  "' class='clickable img-responsive center-block'/><div id='" +
                  id.toString() + "' class='count'>" +
                  cat.clicks.toString() + "</div></div>";
	$("#display").append(toDisplay);
	$(".clickable").click(function(object) {
		var elem = object.target.parentElement.childNodes[2];
		cats[elem.id].clicks += 1;
		$("#" + elem.id).text(cats[elem.id].clicks);
	});
}

$(document).ready(function() {
	createCatList();
	$(".cat").click(function(obj) {
		id = cats.indexOf(cats.filter(function(a){
      return a.name == obj.target.innerHTML; })[0]);
		displayCat(id);
	});
});
