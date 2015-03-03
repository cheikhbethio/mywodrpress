'use strict';


angular.module('myWordPress.siteTemplate', ['ui.router'])

.controller('siteTemplateController', ['$scope', '$rootScope', '$state','$stateParams', '$localStorage' , function($scope, $rootScope, $state, $stateParams, $localStorage){


        $scope.isActiveHeader = function (viewLocation) { 
        	return viewLocation === $state.current.name;
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