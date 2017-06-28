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