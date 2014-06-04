crossroads = angular.module "crossroads", ["crossroadsMenu"]

crossroads.controller "MainCtrl", ($window) ->
  @menus = $window.menuData
  return

$(document).ready ->
  menu = $('.side-nav__dropdown')

  $('.nav__side--toggle').on 'click', ->
    menu.toggleClass('show')

  $('.side-nav__dropdown--item').on 'click', ->
    $('this').toggleClass('open')
