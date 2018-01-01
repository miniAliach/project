angular.module('timeMdl', [])
.directive('timeDir', function ($timeout) {
    return {
        restrict: 'AE',
        templateUrl: 'homePage/timeDirHtml.html',
        scope: {
            timetype: '=',
            timefunction: '&',
            back: '&'
        },
        link: function (scope, element, attribute) {

            scope.timetype = new Date();

        }
    }
});