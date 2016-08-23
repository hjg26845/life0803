
$(function(){
    $.ajaxSetup({
        async: false
    });
    $.get("../../html/index.html", function(data){
        $("#body").append(data);
    });
    $.ajaxSetup({
        async: true
    });
    $("#portal-content").css("min-height",$(window).height()-230>550?$(window).height()-230:550);
    $(window).resize(function(){
        $("#portal-content").css("min-height",$(window).height()-230>550?$(window).height()-230:550);
    });
});