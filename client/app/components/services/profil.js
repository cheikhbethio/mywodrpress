angular.module('myWordPress.profilService', ['ngResource'])

.factory('User_articles', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/articles_editor/:id', {}, {
    	get: {method:'GET', isArray:true}
    });
}])
 .factory('User_comments', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/comments_editor/:id', {}, {
    	get: {method:'GET', isArray:true}
    });
  }])
 .factory('Profile', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/users/:id/profile', {}, {    	
    	get: {method:'GET', isArray:false}
    });
  }]);
