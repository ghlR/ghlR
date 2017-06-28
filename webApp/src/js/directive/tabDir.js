angular.module('app').directive('tabbar',function () {
    return {
        restrict:'EA',
        templateUrl:'view/template/tab_tpl.html',
        replace:true
    }
})