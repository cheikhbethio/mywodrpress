'use strict';


angular.module('myWordPress.connection', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('site.connection', {
		url: 'connection',
		templateUrl: 'site/connection/connection.html',
		controller: 'connectionController'
	});

}])

.controller('connectionController', ['$scope','$http', '$rootScope', '$state', 'Login','Token', "$localStorage", function($scope, $http, $rootScope, $state, Login, Token, $localStorage){
	$scope.newUser;
	$scope.connectionError = false;

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
				$state.go('site.home');

			}, function(error){
				console.log('Erreur de connexion.');
				$scope.$parent.connectionError = true;
			});

			Token.login({
				login: $scope.newUser.login,
				password: $scope.newUser.password,
			}, function(res){

				$localStorage.accessToken = res.token;

			}, function(error){
				console.log('Erreur Token');
			});
		}else{
			console.log('Formulaire Invalide.');
			$scope.$parent.connectionError = true;
		}
	}


	$scope.closeAlert = function() {
		$scope.connectionError = false;
	};

}]);