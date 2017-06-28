/**
 * Created by baby on 2017/2/23.
 */
/*设置header切换*/
//alert($(".header-inner .tab .app-menu li"))
$(".header-inner .tab .app-menu li").click(function(){
    $(this).addClass("active1").siblings().removeClass("active1");
})