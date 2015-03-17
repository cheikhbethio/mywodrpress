'use strict';


angular.module('myWordPress.listMember', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('dashboard.listMember', {
		url: '/members',
		templateUrl: 'dashboard/users/index.html',
		controller: 'listMemberController'
	});

}])

.controller('listMemberController', ['$scope', 'User','Right', '$state','$stateParams',
	function($scope,Page,Right, $state,$stateParams){
	
	$scope.users = User.query();

    $scope.edit = function(iduser,update) {
    	

   };

}]);
