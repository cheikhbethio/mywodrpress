'use strict';


angular.module('myWordPress.connection', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('site.connection', {
		url: 'connection',
		templateUrl: 'site/connection/connection.html',
		controller: 'connectionController'
	});

}])

.controller('connectionController', ['$scope','$http', '$rootScope', '$state', 'Login', "$localStorage", function($scope, $http, $rootScope, $state, Login, $localStorage){
	$scope.newUser;
	
	$scope.connectUser=function(){
  		if ($scope.connectionForm.$valid) {
			console.log($scope.newUser);

			Login.login({
				username: $scope.newUser.login,
				password: $scope.newUser.password,
			}, function(user){

				//$rootScope.currentUser = user;
				$localStorage.currentUser = user;

				console.log("current user : " + $localStorage.currentUser.login);
				$state.go('site');

			}, function(error){
				console.log('Erreur de connexion.');
			});
		}else{
			console.log('Formulaire Invalide.');
		}
	}
}]);