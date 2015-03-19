'use strict';


angular.module('myWordPress.listMember', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('dashboard.listMember', {
		url: '/members',
		templateUrl: 'dashboard/listeMembre/listMember.html',
		controller: 'listMemberController'
	});

}])

.controller('listMemberController', ['$scope', 'User','Right', '$state','$stateParams',
	function($scope,User,Right, $state,$stateParams){
	
	$scope.users = User.query();
	$scope.editmode=false;
	$scope.displayRight=[];
	$scope.displayRight[0]="Membre";
	$scope.displayRight[1]="Rédacteur";
	$scope.displayRight[2]="Modérateur";
	$scope.displayRight[3]="Administrateur";
	$scope.selectValue=[{value: 0, name : "Membre"},{value: 1, name : "Rédacteur"},{value: 2, name : "Modérateur"},{value: 3, name : "Administrateur"}];
    $scope.edit = function(iduser,val) {
    	var maj={right : val};
    	Right.update({id : iduser},maj);
    	$scope.users= User.query();
    	$scope.swap();

   };

   $scope.swap=function(){
   	$scope.editmode= !$scope.editmode;
   }

}]);
