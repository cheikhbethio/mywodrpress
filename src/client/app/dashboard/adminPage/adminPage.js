'use strict';


angular.module('myWordPress.adminPage', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('site.adminPage', {
		url: 'pages',
		templateUrl: 'dashboard/adminPage/adminPage.html',
		controller: 'adminPageController'
	});

}])

.controller('adminPageController', ['$scope', 'pages', '$state',function($scope,pages, $state){
	$scope.lpages = pages.query();

}]);
