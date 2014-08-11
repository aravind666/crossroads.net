angular.module("crdsProfile").controller "crdsProfileCompleteness", ($scope, SecurityContext, Profile) ->
  $scope.crdsLoader = {
    # Todo make it dynamic
    percentage: '45'
  }