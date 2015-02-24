'use strict';


angular.module('myWordPress.appTemplate', ['ui.router'])

.controller('appTemplateController', ['$scope', '$rootScope', '$location', '$localStorage' , function($scope, $rootScope, $location, $localStorage){


		$scope.isActiveHeader = function (viewLocation) { 
        	return viewLocation === $location.path();
        }

        $scope.isUserConnected = function() {
        	$rootScope.user = $localStorage.currentUser;
        	return typeof $localStorage.currentUser != 'undefined';
        }

        $scope.logOut = function() {
        	delete $localStorage.currentUser;
        }
}]);