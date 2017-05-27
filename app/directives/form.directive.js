/**
 * Created by iMax on 26.05.2017.
 */
"use strict";
angular.module('shopsCatalog').directive('formDirective', function(){
  return {
    restrict: 'EA',
    templateUrl: 'directives/directive-templates/form-directive.template.html',
    link: function($scope){
      $scope.addShop = function(name, description, newAddress, longitude, latitude, weekDaysStart, weekDaysEnd, weekEndsStart, weekEndsEnd){
        var newObjToArray = {
          "name":null,
          "shortDescription":null,
          "branch":null,
          "address":null,
          "imgSrc":null,
          "mode": {
            "weekdays": [],
            "weekend": []
          },
          "geoObject":{
                        "geometry":
                            {
                              "type": "Point",
                              "coordinates": []
                            },
                        "properties":
                            {
                              "hintContent": null
                            }
                      }
        };
        $scope.shopsCatalog.push(newObjToArray);
        var elem = angular.element(document.querySelector(".upload-img"));
        $scope.imgSourceLocalTempAddress = elem.attr('src');
        newObjToArray.name = name;
        newObjToArray.shortDescription = description;
        newObjToArray.address = newAddress;
        newObjToArray.geoObject.geometry.coordinates = [longitude, latitude];
        newObjToArray.geoObject.properties.hintContent = name;
        newObjToArray.imgSrc = $scope.imgSourceLocalTempAddress;
        newObjToArray.mode.weekdays[0] = weekDaysStart;
        newObjToArray.mode.weekdays[1] = weekDaysEnd;
        newObjToArray.mode.weekend[0] = weekEndsStart;
        newObjToArray.mode.weekend[1] = weekEndsEnd;
      }
    }
  }
});