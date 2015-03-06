'use strict';


angular.module('myWordPress.admin.menu', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('dashboard.indexMenu', {
		url: '/menu',
		templateUrl: 'dashboard/menu/index.html',
		controller: 'indexMenuController'
	})

}]).controller('indexMenuController', ['$scope', '$state','$stateParams', 'Page', function($scope, $state, $stateParams, Page){
	$scope.boolAdd = false;

	$scope.showAddMenu = function(){
		$scope.boolAdd = true;
	}

}]);
