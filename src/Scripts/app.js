var demoApp = angular.module("demoApp", []);

demoApp.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

demoApp.controller("demoController", ["$scope", "$http", function($scope, $http) {

    $scope.actions = {};

    $scope.actions.showMyConsoles = function() {
        $http.get("http://jsjazz.apiary-mock.com/systems")
            .success(
                function (data) {
                    $scope.consoles = data;
                }
            ).error(
                function () {
                    console.log("Hey, it didn't work :(");
                }
            );
    };

}]);