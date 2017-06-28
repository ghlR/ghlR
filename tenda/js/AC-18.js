$(function () {
    //调用
    var wow = new WOW(
        {
            boxClass: 'wow',             //动画元素的CSS类 (默认类名 wow)
            animateClass: 'animated',  //动画CSS类 (默认类名 animated)
            offset: 300,                 //距离可视区域多少开始执行动画(默认值 0)
            mobile: true              //是否在移动设备上执行动画(默认值 true)
        });
    var wow1 = new WOW({
        boxClass: 'wow1',             //动画元素的CSS类 (默认类名 wow)
        animateClass: 'animated',  //动画CSS类 (默认类名 animated)
        offset: 500,                 //距离可视区域多少开始执行动画(默认值 0)
        mobile: true              //是否在移动设备上执行动画(默认值 true)
    });
    var wow2 = new WOW({
        boxClass: 'wow2',             //动画元素的CSS类 (默认类名 wow)
        animateClass: 'animated',  //动画CSS类 (默认类名 animated)
        offset: 200,                 //距离可视区域多少开始执行动画(默认值 0)
        mobile: true              //是否在移动设备上执行动画(默认值 true)
    });

    wow.init();
    wow1.init();
    wow2.init();
    //获取标签

    $(window).prog($('.AC18-WiFi-progress'),$('.AC18-WiFi-progress img'),'prog',900);
    // big_img.style.left = -numX / (small_box.offsetWidth / big_box.offsetWidth) + 'px';
    var bw = document.body.offsetWidth;
    var bh = window.screen.height;
    $(document).enter('.person', 0.2, bw, bh);
    $(document).enter('.A18', 0.1, bw, bh);
    $(document).enter('.ice', 0.2, bw, bh);
});
