
$(function(){
    $("#card-main").css("min-height",$(window).height());
    $("#card-main .card-left").css("min-height",$(window).height());
    $("#card-main .card-right").css("min-height",$(window).height());
    $(window).resize(function(){
        $("#card-main").css("min-height",$(window).height());
        $("#card-main .card-left").css("min-height",$(window).height());
        $("#card-main .card-right").css("min-height",$(window).height());
    });
});