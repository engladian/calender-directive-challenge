var calendarModule = angular.module('calendarDemoApp', []);

// your controller and directive code go here

calendarModule.controller('dateSelectController', ['$scope', function ($scope) {

    $scope.dateSelect = {};

    var curMonth = new Date().getMonth();
    var curYear = new Date().getFullYear();
    $scope.dateSelect.monthYear = new Date(curYear, curMonth, 1);
}]);