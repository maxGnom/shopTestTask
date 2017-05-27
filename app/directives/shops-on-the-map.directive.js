/**
 * Created by iMax on 24.05.2017.
 */
"use strict";
angular.module('shopsCatalog').directive('mapSource', function(){
  return {
    restrict: 'EA',
    templateUrl: 'directives/directive-templates/shops-catalog-map.template.html',
    link: function($scope){
      $scope.beforeInit = function(){
        var geolocation = ymaps.geolocation;
        geolocation.get({
          provider: 'yandex',
          mapStateAutoApply: true
        }).then(function (result) {
          $scope.geoObjects.push({
            geometry:{
              type:'Point',
              coordinates:result.geoObjects.position
            },
            properties:{
              balloonContent:'Вы здесь'
            }
          });
          $scope.center = result.geoObjects.position;
          $scope.$digest();
        });
      };
      $scope.geoObjects=[];
    }
  }
});