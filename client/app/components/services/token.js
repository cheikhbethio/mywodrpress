angular.module('myWordPress.tokenService', ['ngResource'])

.factory('Token', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/token', {}, {
		login : {method:'POST', isArray:false}
	});
}]);


