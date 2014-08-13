angular.module ('crossroads')
.directive 'crdsProgressBar', ->
  restrict: "E"
  templateUrl: "/templates/crdsProgressbar.html"
  scope:
    percentage: "@"