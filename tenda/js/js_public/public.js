/**
 * Created by Dislower on 2017/2/25.
 */

    (function () {
        /********************* Logo ****************************/
        $(".logo").show(1000);

        /*******************Phone的下拉指示器********************/
        $("#phone_btn").click(
            function(){
                $("#phone_btn span").toggleClass("changecolor");}
                //$("#phone_btn span").css("background-color","#f40");}
        );


        /************************家用产品二级菜单****************/
        $("#nav_jyli,.jysec_nav").mouseenter(function () {
            $(".jysec_nav").stop().slideDown(200);
        });
        $("#nav_jyli,.jysec_nav").mouseleave(function () {
            $(".jysec_nav").stop().slideUp(200);
        });

        $(".jysec_nav img").mouseleave(function () {
            $(this).addClass("jysec_nav_list");
        });

        /************************官方商城二级菜单********************/
        $("#nav_gfli,.gfsec_nav").mouseenter(function () {
            $(".gfsec_nav").stop().slideDown(200);
        });
        $("#nav_gfli,.gfsec_nav").mouseleave(function () {
            $(".gfsec_nav").stop().slideUp(200);
        });

        /*********************************搜索框的聚焦事件********************/
        $("#search").focus(function () {
            $("#search").css("backgroundColor","#fff");
            $("#search").keydown(function(event){
                if(event.keyCode == 13){
                    // window.location.href = "https://www.baidu.com";
                    window.open('http://www.tenda.com.cn/search/AC18.html')
                }
            })
        });
        $("#search").blur(function () {
            $("#search").css("backgroundColor","#333");
        });


        /*********************************返回顶部按钮********************/
        var begin = 0 , end = 0, timer = null;

        function scroll() {
            if(window.pageYOffset !== null){ // ie9+  和 最新浏览器
                return {
                    left: window.pageXOffset,
                    top: window.pageYOffset
                }
            }else if(document.compatMode == 'CSS1Compat'){ // 非怪异浏览器
                return{
                    left: document.documentElement.scrollLeft,
                    top: document.documentElement.scrollTop
                }
            }
            return{
                left: document.body.scrollLeft,
                top: document.body.scrollTop
            }
        }
        window.onscroll = function () {
            var scrollTop = scroll().top;
            if(scrollTop > 300){
                $("#to_Top").show(500);
            }else{
                $("#to_Top").hide(500);
            }
            begin = scrollTop;
        };

        $("#to_Top").get(0).onclick = function () {
            clearInterval(timer);
            timer = setInterval(function () {
                begin = begin + (end - begin)/ 6;
                window.scrollTo(0, begin);
                if(parseInt(begin) == parseInt(end)){
                    console.log(begin, end);
                    clearInterval(timer);
                }
            }, 20);
        };

    })();





