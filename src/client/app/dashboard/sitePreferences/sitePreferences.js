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

.controller('sitePreferencesController', ['$scope', '$rootScope', 'Preferences', '$localStorage', 
	function($scope,  $rootScope, Preferences, $localStorage){

	$scope.preferences = Preferences.get();

	$scope.savePreferences = function(){

		Preferences.save($scope.preferences, function(response) {
			console.log("Correct put response: " + response);
		}, function(error){
			console.log("Response: " + error);
		});

	};

	console.log("Preferences : " + $scope.preferences);

}]);