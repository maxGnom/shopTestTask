/**
 * Created by iMax on 24.05.2017.
 */
"use strict";

angular.module('shopFullInfo')
    .component('shopFullInfo', {
      templateUrl: 'shop-full-info/shop-full-info.template.html',
      controller: ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams){
        var nameOfShop = $routeParams.name;
        $http.get('catalog/shops/' + nameOfShop + '/' + nameOfShop + '.json').
        then(function(response){
          return $scope.shopFullInfo = response.data;
        });
        $scope.sortType = 'nameOfGood';
        $scope.sortReverse  = false;
      }]
    });