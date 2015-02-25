'use strict';


angular.module('myWordPress.siteTemplate', ['ui.router'])

.controller('siteTemplateController', ['$scope', '$rootScope', '$location', '$localStorage' , function($scope, $rootScope, $location, $localStorage){


        $scope.isActiveHeader = function (viewLocation) { 
        	return viewLocation === $location.path();
        }

        $scope.isUserConnected = function() {
        	$rootScope.currentUser = $localStorage.currentUser;
        	return typeof $localStorage.currentUser != 'undefined';
        }

        $scope.logOut = function() {
                delete $rootScope.currentUser;
        	delete $localStorage.currentUser;
        }
}]);