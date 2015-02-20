'use strict';


angular.module('myWordPress.pages', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('pages', {
		url: '/page/:id',
		templateUrl: 'pages/pages.html',
		controller: 'pagesController'
	});

}])

.controller('pagesController', ['$scope', '$stateParams', 'pages', function($scope, $stateParams, PAGES){
	$scope.page = PAGES.get({id: $stateParams.id}, function(page) {
        console.log("get page "+$stateParams.id);
    });
}]);