
$(function(){

    $("#portal-content .info").replaceWith($("#card-main"));
    $("#card-main").css("min-height",$("#card-main").parent().height());
    $("#card-main").show();
    $(window).scroll(function(){
        var dom_ = $("#card-main .phone");
        if($(window).scrollTop() >= 223){
            if(document.body.scrollHeight - dom_.position().top - $(dom_).height() > $("#portal-footer").height()) {
                $(dom_).css({
                    "position": "absolute",
                    "top": $(window).scrollTop()
                });
            }else{
                var h_ = document.body.scrollHeight - $(dom_).height() - $("#portal-footer").height();
                $(dom_).css({
                    "position": "absolute",
                    "top": h_ - $(window).scrollTop() < 0 ? h_ : $(window).scrollTop()
                });
            }
        }else{
            $(dom_).css({
                "position":"static"
            });
        }
    });
});
