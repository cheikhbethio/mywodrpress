angular.module('myWordPress.lastCommentService', ['ngResource'])

.factory('LastComment', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/last_comments', {}, {    	
    	getLast: {method:'GET', isArray:true}
    });
  }]);
