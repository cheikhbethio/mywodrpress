'use strict';


angular.module('myWordPress.site.home', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('site.home', {
		url: '/',
		templateUrl: 'site/home/index.html',
		controller: 'siteHomeController'
	});

}])

.controller('siteHomeController', ['$scope', '$state','$stateParams', function($scope, $state, $stateParams){
	


}]);
