'use strict';


angular.module('myWordPress.createPage', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('dashboard.createPage', {
		url: '/page/create',
		templateUrl: 'dashboard/adminPage/createPage.html',
		controller: 'createPageController'
	});

}])

.controller('createPageController', ['$scope', 'Page', '$state',function($scope,Page, $state){
	$scope.newPage = {};

	$scope.save=function(obj) {

		var nPage={
			title: obj.title
		};

		Page.save(nPage);
		$state.go('dashboard.adminPage');
	}

}]);
