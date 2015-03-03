'use strict';


angular.module('myWordPress.admin.home', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('dashboard.home', {
		url: '/',
		templateUrl: 'dashboard/home/index.html',
		controller: 'homeController'
	});

}])

.controller('homeController', ['$scope', '$state','$stateParams', function($scope, $state, $stateParams){
	


}]);
