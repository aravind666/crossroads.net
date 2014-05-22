crossroads = angular.module "crossroads", []

crossroads.controller "MainCtrl", ($scope, $window) ->
  $scope.menus = $window.menuData
  return
