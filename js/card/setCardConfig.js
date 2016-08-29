
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

function configVipSet(dom){
    $(dom).on("click",function(){
        var opt = {
            type : 0,
            title : $("#card-vip-form").find(".vip-name").val(),
            info : $("#card-vip-form").find(".vip-info").val(),
            random : Math.floor(Math.random()*10000)+10000
        };
        pushVipSet(opt);
    });
    $("#card-form-ready").on("click",".ready-vip-set .ready-msg .del",function(){
        $(".generalPrivilegeList li[data-random='"+$(this).closest(".ready-vip-set").attr("data-random")+"']").remove();
        $(this).closest(".ready-vip-set").remove();
        if($("#card-form-ready .ready-vip-set").length == 0){
            $("#card-vip-form").show();
            $("#card-vip-form .card-config-cancel").show();
            $("#card-vip-form-add").hide();
        }
    });
    $("#card-form-ready").on("click",".ready-vip-set .ready-msg .edit",function(){
        $(".ready-vip-set .ready-msg").show();
        $(".ready-vip-set .ready-form").hide();
        $("#card-vip-form").hide();
        $("#card-vip-form-add").show();

        $(this).closest(".ready-msg").hide();
        $(this).closest(".ready-vip-set").find(".ready-form").show();
        //待操作
    });
    $("#card-vip-form-add").on("click",".card-vip-form-add-a",function(){
        $(".ready-vip-set .ready-msg").show();
        $(".ready-vip-set .ready-form").hide();
        $("#card-vip-form .card-config-cancel").show();
        $("#card-vip-form").show();
    });
    $(".config-vip-set").on("click",".card-config-cancel",function(){
        $(".ready-vip-set .ready-msg").show();
        $(".ready-vip-set .ready-form").hide();
        $("#card-vip-form").hide();
        $("#card-vip-form").find(".vip-name").val("");
        $("#card-vip-form").find(".vip-info").val("");
    });
    $(".config-vip-set").on("click",".card-config-edit",function(){
        var opt = {
            type : 1,
            title : $(this).closest(".ready-vip-set").find(".vip-name").val(),
            info : $(this).closest(".ready-vip-set").find(".vip-info").val(),
            random : $(this).closest(".ready-vip-set").attr("data-random")
        };
        pushVipSet(opt);
    });
}

function pushVipSet(opt){
    if(opt.type == 0){
        var html_ = "<div class='mi-form-item ready-vip-set' data-random='"+opt.random+"'>" +
            "<div class='ready-msg'>" +
                "<span class='glyphicon glyphicon-trash ft-14 del' aria-hidden='true'></span>" +
                "<span class='glyphicon glyphicon-pencil ft-14 edit' aria-hidden='true'></span>" +
                "<span class='title'>"+opt.title+"</span>" +
                "<span class='info'>"+opt.info+"</span>" +
            "</div>" +
            "<div class='ready-form' style='display: none;'>" +
                "<div class='fn-mt15'>" +
                    "<label class='mi-label ft-12'>特权名称</label>" +
                    "<input data-default='会员卡名称' class='mi-input vip-name' placeholder='最多9个汉字' type='text' value='"+opt.title+"'>" +
                    "<div class='mi-form-explain'></div>" +
                "</div>" +
                "<div class='fn-mt15'>" +
                    "<label class='mi-label ft-12'>特权详情</label>" +
                    "<textarea class='mi-textarea ft-12 vip-info' rows='5' cols='10'>"+opt.info+"</textarea>" +
                    "<div class='mi-form-explain'></div>" +
                "</div>" +
                "<div class=''>" +
                    "<input type='button' class='common-btn write-btn fn-ml10 small-btn right-dom card-config-cancel' value='取 消'/>" +
                    "<input type='button' class='common-btn red-btn small-btn right-dom card-config-edit' value='确 定'/>" +
                    "<div class='mi-form-explain clear'></div>" +
                "</div>" +
            "</div>" +
        "</div>"
        $("#card-form-ready").append(html_);
        $("#card-vip-form").hide();
        $("#card-vip-form-add").show();
        var phone_html_ = "<li data-random='"+opt.random+"'>" +
            "<span class='item-label'>"+opt.title+"</span><em></em>" +
            "</li>";
        $(".card-info-list.generalPrivilegeList").append(phone_html_);
        $(".card-info-list.generalPrivilegeList").removeClass("no-border");
        //表单初始化
        $("#card-vip-form").find(".vip-name").val("");
        $("#card-vip-form").find(".vip-info").val("");
    }else{
        $(".ready-vip-set[data-random='"+opt.random+"'] .ready-msg .title").text(opt.title);
        $(".ready-vip-set[data-random='"+opt.random+"'] .ready-msg .info").text(opt.info);
        $(".card-info-list.generalPrivilegeList li[data-random='"+opt.random+"'] .item-label").text(opt.title);

        $("#card-vip-form").hide();
        $("#card-vip-form-add").show();
        $(".ready-vip-set .ready-msg").show();
        $(".ready-vip-set .ready-form").hide();
    }
}