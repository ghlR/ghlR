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