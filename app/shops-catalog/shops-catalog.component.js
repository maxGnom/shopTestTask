/**
 * Created by iMax on 24.05.2017.
 */
"use strict";

angular.module('shopsCatalog')
    .component('shopsCatalog', {
      templateUrl: 'shops-catalog/shops-catalog.template.html',
      controller: ['$scope', '$http', 'Upload', '$timeout', function ($scope, $http, Upload, $timeout){
        $http.get('catalog/shops/shops-catalog.json').
        then(function(response){
          return $scope.shopsCatalog = response.data;
        });
        $scope.deleteShop = function(index){
          $scope.shopsCatalog.splice(index, 1);
        };
        $scope.allowPhotoUpd = true;
        $scope.uploadPic = function(file) {
          file.upload.then(function (response) {
            $timeout(function () {
              file.result = response.data;
            });
          });
        }
      }]
    });