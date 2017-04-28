// Do your work in this file.

// Create a div element with a class name of "view" and append it to the document body using jQuery. 
// You can use append, appendTo, or any other jQuery method.
var divView = $("<div>");
divView.addClass("view");
$("body").append(divView);

// Create a div element with a class name of "grass" and append it to the previously created "view" div from step 3.
var divGrass = $("<div>");
divGrass.addClass("grass");
$(".view").append(divGrass);

// Create a div element with a class name of "sun" and append it to the previously created "view" div from step 3.
var divSun = $("<div>");
divSun.addClass("sun");
$(".view").append(divSun);

// Write a while loop to create 5 divs. 
// The div classes will be "ray-1", "ray-2", "ray-3", "ray-4", and "ray-5". 
// Append each of these divs to the previously created "sun" div from step 5.
var i = 5;
while (i > 0) {
  var divRay = $("<div>");
  divRay.addClass("ray-" + i);
  $(".sun").append(divRay);
  i--;
}

// Create a div element with a class name of "mountain" and append it to the previously created "view" div from step 3.
var divMountain = $("<div>");
divMountain.addClass("mountain");
$(".view").append(divMountain);

// Create a div element with a class name of "mountain-top" and append it to the previously created "mountain" div from step 7.
var divMountainTop = $("<div>");
divMountainTop.addClass("mountain-top");
$(".mountain").append(divMountainTop);

// Write a do...while loop to create 3 divs. 
// The div classes will be "mountain-cap-1", "mountain-cap-2", and "mountain-cap-3". 
// Append each of these divs to the previously created "mountain-top" div from step 8.
var j = 3;
do {
  var divMountainCap = $("<div>");
  divMountainCap.addClass("mountain-cap-" + j);
  $(".mountain-top").append(divMountainCap);
  j--;
} while (j > 0)


// Ali's way
// $("body").append("<div class="view"></div>");

// Ian's way
// $("<div>", {"class":"view"}).appendTo(document.body);
