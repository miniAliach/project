(function () {
    'use strict';
    angular.module('appMdl')
.controller('scheduleCtrl', ['$scope', '$filter', scheduleCtrl]);
    function scheduleCtrl($scope, $filter) {
        $scope.arr = [];
        $scope.hoursSummary = 0;
        $scope.search = "";
        $scope.TableLoad = function () {//load the table
            $scope.hoursSummary = 0;
            $scope.scheduleArr = []; 
         
            for (var i = 1; i <= localStorage.length; i++) {
                var x = localStorage[i];
                var p = JSON.parse(x);
                if (p.status == true)
                    var currentStatus = "enter";
                else var currentStatus = "exit";
                $scope.scheduleArr.push({ date: new Date(p.date), time: p.time, status: currentStatus });
            }
            for (var i = 1, j = 0; i <= localStorage.length - 1; i += 2, j++) {
                var text = localStorage[i];
                var p = JSON.parse(text);
                var en = new Date(p.time).getHours();
                text = localStorage[i + 1];
                p = JSON.parse(text);
                var ex = new Date(p.time).getHours();
                if (ex - en < 0)
                    $scope.hoursSummary += 24 + (ex - en);
                else $scope.hoursSummary += (ex - en);
            }
            $scope.list = angular.copy($scope.scheduleArr);
        }
        var string;
        $scope.filter = function () {
            $scope.scheduleArr = angular.copy($scope.list);
            angular.forEach($scope.scheduleArr, function (item) {
                string = "" + item.date;
                item.Month = string.split(" ")[1];
            });
            if ($scope.search != "")
                $scope.scheduleArr = $filter('filter')($scope.scheduleArr, { Month: $scope.search });
            else {
                $scope.scheduleArr = [];
                string = "";
                $scope.scheduleArr = angular.copy($scope.list);
            }

        }
    }
})();