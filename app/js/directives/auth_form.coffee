angular.module('crossroads')

.directive "authForm", ->
  restrict: "EA"
  templateUrl: "/templates/login.html"
  controller: "LoginCtrl"
  priority: 0
