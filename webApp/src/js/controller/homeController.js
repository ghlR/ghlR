angular.module('app').controller('homeController',['$scope','httpTool','$state',function ($scope,httpTool,$state) {
    var url = 'data/home.json';
    $scope.isLoading =true;
    httpTool.getData({
        url:url,
        method:'get',
        params:null
    },function (res) {
        $scope.dataList = res.posts;
        $scope.isLoading =false;
        console.log(res.posts);
    },function (err) {
        $scope.isLoading =false;
        console.log(err);
    });
    //设置子路由step-3
    $state.go('home.list');
}]);