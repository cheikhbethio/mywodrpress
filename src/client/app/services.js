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


pageServices.factory('user', ['$resource',
  function($resource){
    return $resource('http://localhost:4711/api/user/create', {}, {
      save: {method:'POST', isArray:false}
    });
  }]);

pageServices.factory('login', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/login', {}, {
		login: {method:'POST', isArray:false}
	});
}]);


/*pageServices.factory('logout', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/logout') {

	};
}]); */

