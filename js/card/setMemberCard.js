
$(function(){

    $("#portal-content .info").replaceWith($("#card-main"));
    $("#card-main").css("min-height",$("#card-main").parent().height());
    $("#card-main").show();
});
