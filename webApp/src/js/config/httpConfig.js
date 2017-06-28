angular.module('app')
    //设置白名单
    .config(['$sceDelegateProvider',function ($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',//自身
            'data/home.json'
        ])
    }]);