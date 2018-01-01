(function () {
    'use strict';
    angular.module('appMdl')
.controller('homePageCtrl', ['$scope', homePageCtrl]);
    function homePageCtrl($scope) {
        $scope.SumHours = 0;
        //function to save enter or exit
        $scope.saveEnterOrExit = function (enterTime) {
            if ($scope.Enter == true) {
                localStorage[localStorage.length + 1] = JSON.stringify({ date: new Date(), time: enterTime, status: $scope.Enter });
                $scope.Enter = null;
                $scope.isEnter = false;
                $scope.Exit = true;
                $scope.startTime = new Date(enterTime).getHours();
            }
            else {
                $scope.exitTime = new Date(enterTime).getHours();
                $scope.SumHours = $scope.exitTime - $scope.startTime;
                if ($scope.SumHours < 0)
                    $scope.SumHours = 24 + $scope.SumHours;

                localStorage[localStorage.length + 1] = JSON.stringify({ date: new Date(), time: enterTime, status: $scope.Enter });
                $scope.isEnter = false;
                $scope.Exit = false;
                $scope.Enter = false;

            }
        }
        //go back
        $scope.out = function () {
            $scope.isEnter = false;
        }
    }
})();



