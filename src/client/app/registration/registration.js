'use strict';


angular.module('myWordPress.registration', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider){

	$stateProvider.state('app.registration', {
		url: 'registration',
		templateUrl: 'registration/registration.html',
		controller: 'registrationController'
	});

}])

.controller('registrationController', ['$scope', 
	function($scope){

		$scope.newUser = {};

		$scope.loginAlreadyUsed = false;
		$scope.emailAlreadyUsed = false;

		$scope.nonMatchingPwd = false;

		$scope.saveNewUser = function() {

		  	if ($scope.registrationForm.$valid) {

		    	if($scope.newUser.password === $scope.newUser.passwordConfirmation){
		    		console.log("The passwords match");

		    	}
		    	else{
		    		$scope.nonMatchingPwd = true;
		    		console.log("the passwords don't match !!");
		    	}
		  	}
		  	else{
		  		console.log("Invalide form: ");
		  	}

		  	console.log($scope.newUser);
		};

		$scope.resetRegistrationForm = function() {
			$scope.newUser = {};

			$scope.loginAlreadyUsed = false;
			$scope.emailAlreadyUsed = false;

			$scope.nonMatchingPwd = false;;
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