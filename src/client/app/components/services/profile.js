angular.module('myWordPress.profileService', ['ngResource'])

.factory('Profile', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/users/:id/profile', {}, {    	
    	get: {method:'GET', isArray:false}
    });
  }]);
