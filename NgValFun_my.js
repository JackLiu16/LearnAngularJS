angular.module("myApp", [])
.controller("myCtrl", ['$scope', function($scope){
    $scope.mydata = "hello"
    $scope.myclick = function(){
        alert($scope.mydata)
    }
}])
