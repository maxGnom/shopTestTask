/**
 * Created by iMax on 26.05.2017.
 */
angular.module('shopsCatalog').directive('redactShop', function(){
  return{
    restrict: 'EA',
    templateUrl: 'directives/directive-templates/redact-shop-directive.template.html',
    link: function ($scope) {
      $scope.redactShop = function(thisIndex, newName, newModeWeekDaysStart, newModeWeekDaysEnd, newModeWeekEndsStart, newModeWeekEndsEnd, newDescription, newAddress){
        elem = angular.element(document.querySelector(".upload-img"));
        $scope.imgSourceLocalTempAddress = elem.attr('src');
        $scope.shopsCatalog[thisIndex].name = newName;
        $scope.shopsCatalog[thisIndex].mode.weekdays[0] = newModeWeekDaysStart;
        $scope.shopsCatalog[thisIndex].mode.weekdays[1] = newModeWeekDaysEnd;
        $scope.shopsCatalog[thisIndex].mode.weekend[0] = newModeWeekEndsStart;
        $scope.shopsCatalog[thisIndex].mode.weekend[1] = newModeWeekEndsEnd;
        $scope.shopsCatalog[thisIndex].description = newDescription;
        $scope.shopsCatalog[thisIndex].address = newAddress;
        $scope.shopsCatalog[thisIndex].imgSrc = $scope.imgSourceLocalTempAddress;
        $scope.redact = false;
      }
    }
  }
});