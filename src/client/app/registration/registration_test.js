'use strict';

describe("Registration", function() {

 	beforeEach(module('myWordPress'));

 	var $controller;

	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
	}));

  	describe('initialy', function(){

		var $scope, controller;

  		beforeEach(function(){
  			$scope = {};
    		controller = $controller('registrationController', { $scope: $scope });
  		});

  		it('should have a registrationController', function(){
			expect('registrationController').toBeDefined();
		});

  		it('its newUser variable should be empty', function(){
  			expect($scope.newUser).toEqual({});
  		});
  	});

  	describe('reset', function(){

  		var $scope, controller;

  		var incompleteFakeUser = {
			firstName:'John', 
			lastName:'Do'
    	};

  		beforeEach(function(){
  			$scope = {};
  			$scope.newUser = incompleteFakeUser;
    		controller = $controller('registrationController', { $scope: $scope });
    		
  		});

  		it('should reset the newUser', function(){
			//expect($scope.newUser).toEqual(incompleteFakeUser);
			//$scope.resetRegistrationForm();
			//expect($scope.newUser).toEqual({});

		});

  	});

  	describe('save', function(){

  		var $scope, controller;

  		var completeFakeUser = {
			firstName:'John', 
			lastName:'Do',
			email:
    	};

  		beforeEach(function(){
  			$scope = {};
  			$scope.newUser = incompleteFakeUser;
    		controller = $controller('registrationController', { $scope: $scope });
    		
  		});

  	});

	/*var printNewUser = function(newUser){
		console.log("User lastName: " + $scope.lastName);
		console.log("User firstName: " + $scope.firstName);
		console.log("User email: " + $scope.email);
		console.log("User password: " + $scope.password);
		console.log("User passwordConfirmation: " + $scope.passwordConfirmation);
	};*/


});

