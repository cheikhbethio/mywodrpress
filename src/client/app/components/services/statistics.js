'use strict';

/* Services */

angular.module('myWordPress.statisticService', ['ngResource'])
.factory('Statistics', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/statistics/comments/:id', {}, {
		get: {method:'GET', isArray:true},
		save: {method:'POST', isArray:false}
	});
}]);


