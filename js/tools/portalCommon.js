
$(function(){
    $.ajaxSetup({
        async: false
    });
    $.get("../../html/index.html", function(data){
        $("#body").append(data);
        alert(data);
    });
    $.ajaxSetup({
        async: true
    });
    $("#portal-content").css("min-height",$(window).height()-230>550?$(window).height()-230:550);
    $(window).resize(function(){
        $("#portal-content").css("min-height",$(window).height()-230>550?$(window).height()-230:550);
    });
});