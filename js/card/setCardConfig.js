
$(function(){

    $("#portal-content .info").replaceWith($("#card-main"));
    $("#card-main").css("min-height",$("#card-main").parent().height());
    $("#card-main").show();
    $(window).scroll(function(){
        var h_ = document.body.scrollHeight - $("#card-main .phone").height() - $("#portal-footer").height();
        $("#card-main .phone").css({
            "position": $(window).scrollTop() >= $("#card-main .config-content").offset().top ? "absolute":"static",
            "top": h_ - $(window).scrollTop() < 0 ? h_ : $(window).scrollTop()
        });
    });

    $("[data-form-type='card-config']").each(function(){
        window[$(this).attr('data-function')]($(this));
    });

});

function configCardName(dom){
    $(dom).on("keyup mouseup",function(){
        $(".phone .card-name").text($(dom).val());
    });
}

function configBackgroundColor(dom){
    $(dom).on("click",function(){
        $(".phone .simulator-content").css({
            "background-color":$(dom).val(),
            "background-image":"none"
        });
    });
}