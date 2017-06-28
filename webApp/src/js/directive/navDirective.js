angular.module('app').directive('nav',function () {

    return {
        restrict:'EA',
        templateUrl:'view/template/nav_tpl.html',
        replace:true,
        //link用于实现某些功能
        link:function ($scope,$jqLite,$attrs) {
            $jqLite.find('span').html($attrs.nav);
            if($attrs.ishidden=='true'){
                $jqLite.find('em').css({display:'none'});
            }
        }
    }
})