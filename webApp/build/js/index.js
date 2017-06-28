var app = angular.module('app',['ui.router']);

angular.module('app')
    .config(['$stateProvider','$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home',{
            url:'/home',
            templateUrl:'view/home_tpl.html',
            controller:'homeController'
        })
            //设置子路由step-2
            .state('home.list',{
                url:'/list',
                template:'<div list-view></div>',
                controller:'homeController'
            })
            .state('home.detail',{
                url:'/detail/:id',
                templateUrl:'view/template/detail_tpl.html',
                controller:'detailController'
            })
        $urlRouterProvider.otherwise('home');
    }])
    .config(['$stateProvider','$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('author',{
            url:'/author',
            templateUrl:'view/author_tpl.html'
        });
    }])
    .config(['$stateProvider','$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('content',{
            url:'/content',
            templateUrl:'view/content_tpl.html'
        });
    }])
    .config(['$stateProvider','$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('my',{
            url:'/my',
            templateUrl:'view/my_tpl.html'
        });
    }])
angular.module('app')
    //设置白名单
    .config(['$sceDelegateProvider',function ($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',//自身
            'data/home.json'
        ])
    }]);
angular.module('app').controller('detailController',['$stateParams','$scope',function ($stateParams,$scope) {
    // console.log($stateParams.id);
    $scope.back = function () {
        window.history.back();
    }
    $scope.dataItem = $scope.dataList[$stateParams.id];
    // console.log($scope.dataItem.content)
}]);
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
//封装网络请求
angular.module('app')
    .service('httpTool', ['$http', function ($http) {
        //获取参数
        this.getData = function (args, success, error) {
            if (args.method == 'post') {
                var data = '';
                for (var key in args.params) {
                    data += key + '=' + args.params[key] + '&';
                }
                data = data.slice(0, -1);
                $http({
                    url: args.url,
                    method: args.method,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data: data
                })

            } else if (args.method == "get" || args.method == 'jsonp') {
                $http({
                    url: args.url,
                    method: args.method,
                    params: args.params
                }).then(function (res) {
                    success(res.data);
                }).catch(function (err) {
                    error(err);
                })
            }
        }
    }])
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
angular.module('app').directive('listView',function () {
    return {
        restrict:'EA',
        templateUrl:'view/template/listView.html',
        replace:true
    }
})
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
angular.module('app').directive('tabbar',function () {
    return {
        restrict:'EA',
        templateUrl:'view/template/tab_tpl.html',
        replace:true
    }
})