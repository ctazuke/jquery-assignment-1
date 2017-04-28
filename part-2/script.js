// Do your work in this file.

// Create a for loop that creates 196 divs and will include the following:
// All the divs will have a class of box.
// All even-numbered divs will also have the class of type-1.
// All odd-numbered divs will also have the class of type-2.

// All the divs created in step 3 will be appended to the document body.

for (var i = 0; i < 196; i++) {
  var divBox = $("<div>");
  if (i%2 == 0) {
    divBox.addClass("box type-1");
  } else {
    divBox.addClass("box type-2");
  }
  $("body").append(divBox);
}

// Add an click event listener on all the created box divs in step 3 and 4. 
// Important: You cannot do this with any type of loop.
$(".box").click(function() {
  $(this).toggleClass("clicked");
  }
);

// Ali's way
// var classes = ["box"];
// $("body").append("<div class" + classes.join("")+"></div>");


