"use strict";

angular.module('shopTest').
    config(['$routeProvider', function config($routeProvider){
      $routeProvider.
          when('/shops-catalog', {
            template: '<shops-catalog></shops-catalog>'
          }).
          when('/shops-catalog/:name', {
            template: '<shop-full-info></shop-full-info>'
          }).
          otherwise('/shops-catalog');
    }
]);