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

	$scope.preferences = {
		apropos: {
			title: "A propos title",
			content: "A propos subtitle"
		},

		site: {
			title: "A title",
			subtitle: "site subtitle"
		}
	};

}]);