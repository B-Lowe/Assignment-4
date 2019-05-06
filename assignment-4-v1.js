//Handles the drop-down nav bar
$('.link').hover(function() {
    $(this).children(".dropdown").css("display", "block");
},
function() {
    $(this).children(".dropdown").css("display", "none");
});

//Handles the tiles
$('.tile-button').on('click', function() {
    $(this).parent().css("display", "none");
});

//Handles the reset button
$("#reset").on("click", function() {
    $(".tile").css("display", "inline-block");
});

//Handles the clear button
$("#clear").on("click", function() {
    $(".tile").css("display", "none");
});

//Hides the text and bring up the form for input
 $("#txt").dblclick(function() {
    	$("#txt").hide();
    	$("#frm").css({"display":"block"});
    	$("#edittext").text($("#txt").text());
    	$("#sub").prop("type", "button");
    });
//Takes the content of the form and updates the text accordingly before hiding the form
    $("#sub").click(function() {
    	$("#txt").text($("#edittext").val());
    	$("#txt").css({"display":"block"});
    	$("#frm").hide();
    });

//Handles swapping the images by using an array as a queue
    var images = [ "assignment-4-photos/avl.png", "assignment-4-photos/rbtree.jpg", "assignment-4-photos/tree2.jpg", "assignment-4-photos/tree.jpg" ];
    $("#image").click(function() {
    	var x = images.shift();
    	$("#image").attr("src", x);
    	images.push(x);
    });
