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
		/*Preferences.save($scope.preferences, function(resp){
			console.log("Saved preferences");
		}, function(err){
			console.log("Could not save preferences");
		});*/

		$http.put('components/preferences/preferences.json', $scope.preferences).
		  success(function(data, status, headers, config) {
		    console.log("Saved preferences");
		  }).
		  error(function(data, status, headers, config) {
		    console.log("Could not save preferences");
		  });
	};

	console.log("Preferences : " + $scope.preferences);

}]);