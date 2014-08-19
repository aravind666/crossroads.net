var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

angular.module("crdsProfile").directive("crdsProfile", function($timeout, $animate, $compile, $templateCache) {
  return {
    restrict: 'EA',
    scope: true,
    controller: function($scope, $element, $attrs, Profile, Constants) {
      return new ((function() {
        function _Class() {


          this.registerLogin = __bind(this.registerLogin, this);
          var template;
          this.addLoading();
          $scope.percentage = this.calculateProfileCompleteness();
          template = $templateCache.get('profile/templates/profile.html');
          this.profileTemplate = $compile(template);
          $scope.$watch("securityContext.loggedIn", (function(_this) {
            return function(loggedIn) {
              var parent, user;
              user = $scope.securityContext.user;
              if (loggedIn && user) {
                Profile.getContact(user.ContactId).then(function(data) {
                  return $scope.contact = data;
                });
                _this.removeLoading();
                if (_this.loginCtrl) {
                  _this.loginCtrl.hide();
                }
                _this.profileElement = _this.profileTemplate($scope);
                return $element.append(_this.profileElement);
              } else if (loggedIn === false) {
                _this.removeLoading();
                parent = $element.parent();
                if (_this.profileElement) {
                  _this.profileElement.remove();
                }
                if (_this.loginCtrl) {
                  return _this.loginCtrl.show(parent, $element);
                }
              } else if (loggedIn === null) {
                if (_this.loginCtrl) {
                  _this.loginCtrl.hide();
                }
                if (_this.profileElement) {
                  _this.profileElement.remove();
                }
                return _this.addLoading();
              }
            };
          })(this));
        }

        _Class.prototype.registerLogin = function(loginCtrl) {
          return this.loginCtrl = loginCtrl;
        };

        _Class.prototype.removeLoading = function() {
          if ($attrs.loadingClass) {
            $animate.removeClass($element, $attrs.loadingClass);
          }
          return $element.html('');
        };

        _Class.prototype.addLoading = function() {
          if ($attrs.loadingClass) {
            return $animate.addClass($element, $attrs.loadingClass);
          }
        };

        _Class.prototype.calculateProfileCompleteness = function() {

           // Logic Description
           // Make constant names to match with the ministry platform keys for profile values
           // Access Constrant.weightages values using ministry platform keys
           // Add them
           var weightage = 0;
           // Sample Add logic and sample constant access to use
           weightage = Constants.weightages.crossroadsLocation + Constants.weightages.streetAddress
           return weightage
        };

        return _Class;

      })());
    }
  };
});

