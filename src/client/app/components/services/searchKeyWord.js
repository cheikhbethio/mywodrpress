angular.module('myWordPress.keywordService', ['ngResource'])

.factory('KeyWord', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/search/article', {}, {    	
    	get: {method:'GET', isArray:true}
    });
  }]);
