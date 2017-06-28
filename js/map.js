$(function(){
    // 百度地图API功能
    var map = new BMap.Map("mymap");    // 创建Map实例
    // map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
    map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
    map.setCurrentCity("郑州");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    var point = new BMap.Point(113.955096,22.551734);
    var maker = new BMap.Marker(point);
    map.centerAndZoom(point,15);
    map.addOverlay(maker);
    var opts = {
        width:80,
        height: 20,
        title:"我在科技园哟"
    }
    var infoWindow = new BMap.InfoWindow('深圳市南山区科兴路10号',opts);
    maker.addEventListener("click",function(){
        map.openInfoWindow(infoWindow,point)
    })
})