/**
 * Created by Dislower on 2017/2/25.
 */
(function () {
    /**************************焦点图的 pre和next 的 出现 消失************/
    $(".banner").mouseenter(function () {
        $(".pre_icon,.next_icon").addClass("toggle");
    });
    $(".banner").mouseleave(function () {
        $(".pre_icon,.next_icon").removeClass("toggle");
    });

    /************************家用新品 图片缩放****************************/
    $(".img_scale img").mouseleave(function () {
        $(this).addClass("img_scale");
    });

    /***************************服务支持*******************************/
    $(".fw_support_list").mouseleave(function () {
        $(this).addClass("fw_support_list");
    });

//
})();

