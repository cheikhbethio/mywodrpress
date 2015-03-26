'use strict';

/* Services */

angular.module('myWordPress.commentService', ['ngResource'])
.factory('Commentaire', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/comments/:id', {}, {
		get: {method:'GET', isArray:true},
		save: {method:'POST', isArray:false}
	});
}]);


