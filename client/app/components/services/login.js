'use strict';

/* Services */

angular.module('myWordPress.loginService', ['ngResource'])
.factory('Login', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/login', {}, {
		login: {method:'POST', isArray:false}
	});
}]);


