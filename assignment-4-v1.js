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