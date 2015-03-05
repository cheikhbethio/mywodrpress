angular.module('myWordPress.searchKeyWord', ['ngResource'])

.factory('searchKeyWord', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/articles/keyword', {}, {    	
    	get: {method:'GET', isArray:true}
    });
  }]);
