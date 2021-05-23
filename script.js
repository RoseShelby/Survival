$(".begin").hide(function() {
    $(".begin").hide();
});

$(".sleep").hide(function() {
    $(".sleep").hide();
});

$(".mining").hide(function() {
    $(".mining").hide();
});

$(".stone2").hide(function() {
    $(".stone2").hide();
});

$(".obtained").hide(function() {
    $(".obtained").hide();
});
$(".continue").hide(function() {
    $(".continue").hide();
});
$(".end").hide(function() {
    $(".end").hide();
});

$("button").hover(function() {
    $("button").css("background-color", "lightgrey");
});

$("button").mouseleave(function() {
    $("button").css("background-color", "white");
});

$("button").click(function() {
    $(".start").hide();
    $(".begin").show();
});

$(".choice1").hover(function() {
    $(".choice1").css("border", "solid black");
});
$(".choice2").hover(function() {
    $(".choice2").css("border", "solid black");

});
$(".choice3").hover(function() {
    $(".choice3").css("border", "solid black");
});
$(".choice1").mouseleave(function() {
    $(".choice1").css("border", "solid skyblue");
});

$(".choice2").mouseleave(function() {
    $(".choice2").css("border", "solid skyblue");
});

$(".choice3").mouseleave(function() {
    $(".choice3").css("border", "solid skyblue");
});


$(".choice2").click(function() {
    $(".begin").hide();
    $(".obtained").hide();
    $(".sleep").show();
    $(".collecting").hide();
});

$(".choice1").click(function() {
    $(".begin").hide();
    $(".mining").show();
});

$(".stone").dblclick(function() {
    $(".stone").hide();
    $(".stone2").show();
});
$(".stone2").dblclick(function() {
    $(".mining").hide();
    $(".continue").hide();
    $(".obtained").show();
});
$(".choice3").click(function() {
    $(".obtained").hide();
    $(".continue").show();
    $(".stone4").show();
    $(".stone3").hide();
});
$(".stone4").dblclick(function() {
    $(".stone4").hide();
    $(".stone3").show();
});
$(".stone3").dblclick(function() {
    $(".continue").hide();
    $(".sleep").show();
    $(".collecting").show();
});