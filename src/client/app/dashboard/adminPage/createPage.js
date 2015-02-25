'use strict';


angular.module('myWordPress.createPage', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('site.createPage', {
		url: 'create/page',
		templateUrl: 'dashboard/adminPage/createPage.html',
		controller: 'createPageController'
	});

}])

.controller('createPageController', ['$scope', 'pages', '$state',function($scope,pages, $state){
	$scope.newPage = {};

	$scope.save=function(obj) {

		var nPage={
			title: obj.title,
			content: obj.title
		};

		pages.save(nPage);
	}

}]);
