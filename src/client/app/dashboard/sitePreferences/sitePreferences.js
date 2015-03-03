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

.controller('sitePreferencesController', ['$scope', '$rootScope', 'User', '$localStorage', 
	function($scope, $rootScope, User, $localStorage){

		console.log("Site preferences !!");

		$scope.myHTML = "<p>This is HTML from inside the controller</p>";

}]);