$(function () {

//定义一个数组,用来保存各项的保存参数,默认是全部
    var data = [
        // 0 传输速率
        {size: "全部"},
        // 1 协议标准
        {size: "全部"},
        // 2 家用产品
        {size: "全部"},
        // 3 商用网络
        {size: "全部"},
    ]
    //第一次预加载八张
    var count = 8;
    //用来保存筛选的数据
    var res = [];
    // 节流定时器
    var proTimer = null;
    //第一次加载
    getData();

    //为a定义事件  1 当前类的添加  2 ajax的调用
    $('.pro_guide_main li a').on('click', function () {
        //为产品列表添加cur类
        $(this).addClass('cur').parent().siblings().find('a').removeClass('cur');
        var content = $(this).text();
        var index = $(this).parent().parent().parent().index();
        data[index].size = content;
        //得到作为筛选的条件数据
        // 1 发出ajax请求  得到数据 根据数据进行筛选

        // 得到数据加载前先将清零
        $('#productresult').empty();

        //每一次点击 筛选条件 都会调用ajax 筛选数据 并且布局
        getData();

    })

    //定义鼠标滚动事件 节流
    $(window).on("scroll", function () {
        clearTimeout(proTimer);
        proTimer = setTimeout(function () {
            var scrollTop = $(document).scrollTop(); //滚动条滚动高度
            var documentH = $(document).height();  //滚动条高度
            var windowH = $(window).height(); //窗口高度
            // console.log(scrollTop, documentH, windowH);
            //当文档高度 小于 滚动高度加上窗口高度+300px的时候表示需要加载了
            if (scrollTop >= documentH - windowH - 300) {
                //触发加载条件,加载4张
               
                count += 4;
            }
            //不用请求数据 只需要加载
            showPro(res);
        }, 200)
    })


    //根据res 生成产品详情表函数
    function showPro(obj) {
        // 得到数据前先将数据清零
        $('#productresult').empty();
        $.each(obj, function (key,value) {
            if (key < count) {
                var str = "<div class='col-xs-12 col-sm-4 col-md-3 plbox'>" +
                    "<a  target='_blank' href='" + this.url + "'>" +
                    "<img src='" + this.imgUrl + "' ></a>" +
                    " <div class='caption clearfix'>" +
                    "  <h3 class='cenh3'> " + this.name + " <a class='tdbuygo' target='_blank' href='http://item.jd.com/297760.html'>京东</a>" +
                    "  <a class='tdbuygo' target='_blank' href='https://detail.tmall.com/item.htm?id=42807939418'>天猫</a>" +
                    "  </h3><p>" + this.jieshao + "</p>" +
                    "</div>" +
                    "</div>";
                $('#productresult').append(str);
            }
        })

    };

    //ajax 请求数据函数
    //ajax请求
    function getData() {
       res = [];
        ajax({
            url: "../json/product.json",
            success: function (str) {
                //JSON 数据
                var pro = JSON.parse(str);
                //对数据进行筛选
                //alert(pro.length);
                $.each(pro, function (key, value) {
                        if ((this.sulv === data[0].size || data[0].size === "全部") &&
                            (this.xieyi === data[1].size || data[1].size === "全部") &&
                            (this.jiayong === data[2].size || data[2].size === "全部") &&
                            (this.shangyong === data[3].size || data[3].size === "全部")
                        ) {
                            res.push(this);
                        }
                });
                showPro(res);

            }
        });
    }


})




















