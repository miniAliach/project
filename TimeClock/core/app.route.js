//Routing pages
angular.module('appMdl')
.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: "homePageCtrl",
            templateUrl: "homePage/homePage.html"
           

        })
            .when('/schedule', {
                controller: "scheduleCtrl",
                templateUrl: "schedule/schedule.html",
               
            })
    .when('/homePage', {
        controller: "homePageCtrl",
        templateUrl: "homePage/homePage.html"
        

    })

});
