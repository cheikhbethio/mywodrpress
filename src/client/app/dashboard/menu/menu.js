'use strict';


angular.module('myWordPress.admin.menu', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('dashboard.indexMenu', {
		url: '/menu',
		templateUrl: 'dashboard/menu/index.html',
		controller: 'indexMenuController'
	})

}]).controller('indexMenuController', ['$scope', '$state','$stateParams', function($scope, $state, $stateParams){
	


}]);
