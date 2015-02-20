'use strict';

/* Services */

var pageServices = angular.module('pageServices', ['ngResource']);

pageServices.factory('pages', ['$resource', function($resource){
	return $resource('/api/pages/:id', {}, {
    	query: {method:'GET', isArray:true},
    	get: {method:'GET', isArray:false},
    	save: {method:'POST', isArray:true},
     	update: {method:'PUT', isArray:false}
    });
}]);
