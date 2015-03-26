'use strict';

/* Services */

angular.module('myWordPress.statisticService', ['ngResource'])
.factory('StateNbComment', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/statistics/comment/:id', {}, {
		get: {method:'GET', isArray:false},
	});
}])

.factory('StateAdmin', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/nbr/admin', {}, {
		get: {method:'GET', isArray:false},
	});
}])

.factory('StateModerateur', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/nbr/moderator', {}, {
		get: {method:'GET', isArray:false},
	});
}])

.factory('StateWriter', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/nbr/writer', {}, {
		get: {method:'GET', isArray:false},
	});
}])
.factory('StateMember', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/nbr/member', {}, {
		get: {method:'GET', isArray:false},
	});
}])

.factory('StatePage', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/nbr/page', {}, {
		get: {method:'GET', isArray:false},
	});
}])

.factory('StateArticles', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/nbr/article', {}, {
		get: {method:'GET', isArray:false},
	});
}])

.factory('StateComment', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/nbr/comment', {}, {
		get: {method:'GET', isArray:false},
	});
}]);


