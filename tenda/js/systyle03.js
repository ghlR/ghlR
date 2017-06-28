/**
 * Created by xiaolin on 2017/2/26.
 */

$(function () {

    $('.qieh li:not(:first)').mousedown(function () {

        $(this).addClass('cur').siblings().removeClass('cur');

        var index = $(this).index()-1;
        // alert(index);
        
        $('.content').children().eq(index).addClass('active').siblings().removeClass('active');

    });


    var trs = $('<tr class="tjtblr2">'+
        '<td class="tdwse">路由器</td>'+
        '<td class="tdwse">G3</td>'+
        '<td class="tdwse">1</td>'+
        '</tr>'+
        '<tr class="tjtblr3">'+
        '<td class="tdwse">核心交换机</td>'+
        '<td class="tdwse">TEG1024G</td>'+
        '<td class="tdwse">1</td>'+
        '</tr>'+
        '<tr class="tjtblr4">'+
        '<td class="tdwse">POE交换机</td>'+
        '<td class="tdwse">TEF1109P</td>'+
        '<td class="tdwse">1</td>'+
        '</tr>'+
        '<tr class="tjtblr5">'+
        '<td class="tdwse">吸顶AP</td>'+
        '<td class="tdwse">i9</td>'+
        '<td class="tdwse">1</td>'+
        '</tr>'+
        '<tr class="tjtblr6">'+
        '<td class="tdwse">AP控制器</td>'+
        '<td class="tdwse">M3</td>'+
        '<td class="tdwse">1</td>'+
        '</tr>'+
        '<tr class="tjtblr7">'+
        '<td class="tdwse">入墙AP</td>'+
        '<td class="tdwse">W6</td>'+
        '<td class="tdwse">1</td>'+
        '</tr>');


    $(".tjcenter img").mousedown(function(){

        $(trs).appendTo('.tbd');

        $("#btnde").show();

        $('.tjcenterline').css('border-left','solid 2px #ccc');

        $(".tjcenter img").hide();

        $("#btnde").mousedown(function () {
            
            $('.xialaqingdan').show();

            $("#btnde").hide();

            $('.qieh li:not(:first)').mousedown(function () {

                $('#btnsubmit').show();

                $("#btnde").hide();

                $(trs).remove();

                $('.xialaqingdan').hide();
            })
        })

    });


});
