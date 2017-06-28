$(document).ready(function(){
    toggle_nav_container();
    goToByScroll();
});

function toggle_nav_container() {

    var toggleButton = $('#toggle_m_nav');
    var navContainer = $('#m_nav_container');
    var menuButton = $('#m_nav_menu');
    var menuButtonBars = $('.m_nav_ham');
    var wrapper = $('#wrapper');

    // toggle the container on click of button (can be remapped to $menuButton)

    toggleButton.on("click", function(){

        // declare a local variable for the window width
        var viewportWidth = $(window).width();//获取屏幕宽度

        // if statement to determine whether the nav container is already toggled or not

        if(navContainer.is(':hidden'))
        //如果导航条隐藏状态
        {
            wrapper.removeClass('closed_wrapper').addClass("open_wrapper");//添加样式
            navContainer.slideDown(200).addClass('container_open').css("z-index", "2");//添加动画并添加显示样式
            // $(window).scrollTop(0);
            menuButtonBars.removeClass('button_closed').addClass('button_open');
            $("#m_ham_1").addClass("m_nav_ham_1_open");
            $("#m_ham_2").addClass("m_nav_ham_2_open");
            $("#m_ham_3").addClass("m_nav_ham_3_open");

        }
        else
        {
            navContainer.css("z-index", "0").removeClass('container_open').slideUp(200);
            menuButtonBars.removeClass('button_open').addClass('button_closed');
            wrapper.removeClass('open_wrapper').addClass("closed_wrapper");
            $("#m_ham_1").removeClass("m_nav_ham_1_open");
            $("#m_ham_2").removeClass("m_nav_ham_2_open");
            $("#m_ham_3").removeClass("m_nav_ham_3_open");

        }
    });
}
function goToByScroll(){

    $(".m_nav_item a").on("click", function(e) {

        e.preventDefault();//阻止a标签的默认行为
        // var $divID =$(this).attr("href");
        // var $scrollToDiv = "$(" + "'" + $divID + "'" +")";

        $('html,body').animate({
            scrollTop: $($(this).attr("href")).offset().top - 50
        }, "slow");

    });
}








