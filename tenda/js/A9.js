$(function () {
    var w = {
        top: $(window).scrollTop(),
        bottom: $(window).scrollTop() + $(window).height()
    };

    $.fn.extend({
        move:function (obj,ratio) {
            var self = this;
            this.bind('mouseenter',function (event) {
                event = event || window.event;
                var mouseX = event.clientX;
                var mouseY = event.clientY;
                obj.animate({
                    left:-(mouseX)*ratio + 'px',
                    top:-(mouseY)*ratio + 'px'
                },300,function () {
                        self.bind('mousemove',function (event) {
                            event = event || window.event;
                            var mouseX = event.clientX;
                            var mouseY = event.clientY;
                            obj.css({
                                left:-(mouseX)*ratio + 'px',
                                top:-(mouseY)*ratio + 'px'
                            });
                        });
                });
            });


        }
    });
    var A91 = $('.A91');
    var A91_1 = A91.children().eq(2);
    var A91_2 = A91.children().eq(3);
    $(document).move(A91_1,0.10);
    $(document).move(A91_2,0.2);

    var offsetTop = $('.A95').offset().top;
    var num = 0;
    $(window).scroll(function () {
        var oH = $(window).scrollTop();
        if(oH >= offsetTop){
            $(window).scroll = null;
            var timer = setInterval(function(){
                num++;
                if(num>30){
                    num=30;
                    clearInterval(timer);
                }
                $("#annum").html(num);
            },50)
            $('.tlYellow').css("height","300px");
        }
    })
});