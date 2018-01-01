(function () {
    'use strict';
   
    var appMdl = angular.module('appMdl', ['timeMdl','ngRoute', 'ui.bootstrap', 'ds.clock', 'ngAnimate', 'chart.js']);

    appMdl.run(function ($rootScope,$location) {
         $rootScope.Route=function (pageName) {
                   $location.path(pageName);
              }; 
       
     });

})();
