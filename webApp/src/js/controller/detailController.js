angular.module('app').controller('detailController',['$stateParams','$scope',function ($stateParams,$scope) {
    // console.log($stateParams.id);
    $scope.back = function () {
        window.history.back();
    }
    $scope.dataItem = $scope.dataList[$stateParams.id];
    // console.log($scope.dataItem.content)
}]);