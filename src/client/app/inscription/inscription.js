'use strict';


angular.module('myWordPress.inscription', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider){

	$stateProvider.state('inscription', {
		url: '/inscription',
		templateUrl: 'inscription/inscription.html',
		controller: 'registrationController'
	});

}])

.controller('registrationController', ['$scope', 
	function($scope){

		$scope.newUser = {};

		$scope.saveNewUser = function() {
	  		$scope.$broadcast('show-errors-check-validity');

		  	if ($scope.registrationForm.$valid) {
		    	console.log("Saving the user");
		    	console.log($scope.newUser);
		  	}
		  	else{
		  		console.log("Invalide user: ");
		  		console.log($scope.newUser);
		  	}
		};

		$scope.resetRegistrationForm = function() {
		    $scope.$broadcast('show-errors-reset');
		    $scope.newUser = {};
  		};

  		/* For debugging purposes only */
  		var printNewUser = function(newUser){
  			console.log("User lastName: " + newUser.lastName);
  			console.log("User firstName: " + newUser.firstName);
  			console.log("User email: " + newUser.email);
  			console.log("User password: " + newUser.password);
  			console.log("User passwordConfirmation: " + newUser.passwordConfirmation);
  		};
}]);