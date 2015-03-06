'use strict';

/* Services */

angular.module('myWordPress.commentService', ['ngResource'])
.factory('Commentaire', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/comments', {}, {
		save: {method:'POST', isArray:false}
	});
}]);


