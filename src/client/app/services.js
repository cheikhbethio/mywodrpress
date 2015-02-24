'use strict';

/* Services */

var pageServices = angular.module('pageServices', ['ngResource']);

pageServices.factory('pages', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/pages/:id', {}, {
    	query: {method:'GET', isArray:true},
    	get: {method:'GET', isArray:false},
    	save: {method:'POST', isArray:true},
     	update: {method:'PUT', isArray:false}
    });
  }]);

pageServices.factory('users', ['$resource',
  function($resource){
    return $resource('http://localhost:4711/api/users/:id', {}, {
      register: {method:'POST', isArray:false },
      get: {method:'GET', isArray:false },
      update: {method:'PUT', isArray:false}
    });
  }]);

pageServices.factory('login', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/login', {}, {
		login: {method:'POST', isArray:false}
	});
}]);


