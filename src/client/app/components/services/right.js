angular.module('myWordPress.rightService', ['ngResource'])

.factory('Right', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/users/:id/right', {}, {    	
    	right: {method:'PUT', isArray:true}
    });
  }]);
