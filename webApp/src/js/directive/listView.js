angular.module('app').directive('listView',function () {
    return {
        restrict:'EA',
        templateUrl:'view/template/listView.html',
        replace:true
    }
})