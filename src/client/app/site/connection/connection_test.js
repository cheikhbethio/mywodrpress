'use strict';

describe("Connection", function() {

  beforeEach(module('myWordPress'));

 	var $controller;

	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
	}));

  describe('initialy', function(){

		var $scope, controller;

  		beforeEach(function(){
  			$scope = {};
    		controller = $controller('connectionController', { $scope: $scope });
  		});

  		it('should have a connectionController', function(){
        expect('myWordPress.connectionController').toBeDefined();
		  });

  	});

  	/*describe('reset', function(){

  		var $scope, controller;

  		var incompleteFakeUser = {
        firstName:'John', 
        lastName:'Do'
    	};

  		beforeEach(function(){
  			$scope = {};
    		controller = $controller('registrationController', { $scope: $scope });
    		
  		});

  		it('should reset the newUser', function(){
        $scope.newUser = incompleteFakeUser;

  			expect($scope.newUser).toEqual(incompleteFakeUser);
  			$scope.resetRegistrationForm();
  			expect($scope.newUser).toEqual({});
		  });

  	});

  	describe('save', function(){

  		var $scope, controller;

  		var correctFakeUser = {
        firstName:'John', 
        lastName:'Do',
        login: 'johnDo',
        email: 'johnDo@do.com',
        password: 'do',
        passwordConfirmation: 'do'
    	};

      var nonMatchingPassFakeUser = {
        firstName:'John', 
        lastName:'Do',
        login: 'johnDo',
        email: 'johnDo@do.com',
        password: 'do',
        passwordConfirmation: 'dop'
      };

  		beforeEach(function(){
  			$scope = {};
    		controller = $controller('registrationController', { $scope: $scope });
  		});

      it('should set the nonMatchingPwd to true if the passwords dont match', function(){


      });

  	});*/

});

