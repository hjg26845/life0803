
$(function(){
    $("#portal-content").css("min-height",$(window).height()-230>550?$(window).height()-230:550);
    $("#main-iframe").css("min-height",$(window).height()-230>550?$(window).height()-230:550);
    $(window).resize(function(){
        $("#portal-content").css("min-height",$(window).height()-230>550?$(window).height()-230:550);
        $("#main-iframe").css("min-height",$(window).height()-230>550?$(window).height()-230:550);
    });
});