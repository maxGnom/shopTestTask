/**
 * Created by iMax on 26.05.2017.
 */
"use strict";
angular.module('shopsCatalog').directive('goodsDirective', function(){
  return {
    restrict: 'EA',
    templateUrl: 'directives/directive-templates/goods-directive.template.html',
    link: function($scope){
      $scope.addGood = function(name, price, sizes, classes, rate){
        var newObjToArray = {
              "nameOfGood":null,
              "price":null,
              "class":null,
              "rate":null
              },
            elem = angular.element(document.querySelector("form")),
            inputName =  elem.find('input');
        if (inputName.val() === "")
        {
          return false
        }
        inputName.val('');
        $scope.shopFullInfo.goods.push(newObjToArray);
        newObjToArray.nameOfGood = name;
        newObjToArray.price = price;
        newObjToArray.class = classes;
        newObjToArray.rate = rate;
        $scope.created = false;
      }
    }
  }
});