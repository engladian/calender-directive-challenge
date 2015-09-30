calendarModule.controller('calenderController', ['$scope', function ($scope) {

    $scope.dateSelect = {};

    var curMonth = new Date().getMonth();
    var curYear = new Date().getFullYear();
    $scope.dateSelect.monthYear = new Date(curYear, curMonth, 1);
}]);


calendarModule.directive('calenderDirective'['$scope', function($scope) {


}]);