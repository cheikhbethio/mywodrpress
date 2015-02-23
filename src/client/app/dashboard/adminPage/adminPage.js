'use strict';


angular.module('myWordPress.adminPage', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('dashboard.adminPage', {
		url: 'adminPage',
		templateUrl: 'dashboard/adminPage/adminPage.html',
		controller: 'adminPageController'
	});

}])

.controller('adminPageController', ['$scope', function($scope){

}]);
