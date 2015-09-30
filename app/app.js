var calendarModule = angular.module('calendarDemoApp', []);

// your controller and directive code go here
calendarModule.controller('calenderController',
['$scope', 'calenderFactory', function ($scope, calenderFactory) {
    $scope.selectedMonthYear = new Date();
    function setCalender() {
        $scope.calenderMap = calenderFactory.createCalenderMap
                                              ($scope.selectedMonthYear);
    }
    setCalender();

    /////////////////////////////////////////////////////////
    $scope.buildCalender = function() {
        setCalender();
    };
}]);

calendarModule.directive('calender', function () {
    return {
        restrict: 'E',
        templateUrl: './calender-directive/calender.html'
    };
});

calendarModule.factory('calenderFactory', function() {
    return {
        createCalenderMap: function(date) {
            var selCalRange = CalendarRange.getMonthlyRange(date);
            var curMonth = date.getMonth();
            var calDisplayMap = [];
            var calDisplayRow = [];
            for (var idx = 0; idx < 35; idx++) {
                calDisplayRow.push(
                    { 
                        day:         selCalRange.days[idx].day, 
                        otherClass:  selCalRange.days[idx].month !== curMonth  
                    });
                if (selCalRange.days[idx].date.getDay() === 6) {
                    calDisplayMap.push(calDisplayRow);
                    calDisplayRow = [];
                }
            }
            return calDisplayMap;
        }
    }
});