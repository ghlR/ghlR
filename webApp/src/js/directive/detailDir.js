angular.module('app').directive('detail',function () {

    return {
        restrict:'EA',
        // templateUrl:'../view/template/nav_tpl.html',
        replace:true,
        //link用于实现某些功能
        link:function ($scope,$jqLite,$attrs) {
            $jqLite.html($attrs.detail);
        }
    }
})