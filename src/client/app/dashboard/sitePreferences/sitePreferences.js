'use strict';


angular.module('myWordPress.sitePreferences', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('dashboard.preferences', {
		url: '/preferences',
		templateUrl: 'dashboard/sitePreferences/sitePreferences.html',
		controller: 'sitePreferencesController',
		data: { 
            requireLogin: true
        }
	});

}])

.controller('sitePreferencesController', ['$scope', '$http','$rootScope', 'Preferences', '$localStorage', 
	function($scope, $http, $rootScope, Preferences, $localStorage){

	$scope.preferences = Preferences.get();

	$scope.savePreferences = function(){

	};

	console.log("Preferences : " + $scope.preferences);

}]);