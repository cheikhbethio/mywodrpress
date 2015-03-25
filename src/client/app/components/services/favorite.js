'use strict';

/* Services */

angular.module('myWordPress.favoriteService', ['ngResource'])

.factory('AddFavorite', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/users/:id_user/article/:id_art', {}, {    	
     	update: {method:'PUT', isArray:true},
     	remove : {method : 'DELETE', isArray:false}
    });
  }])
.factory('GetFavorite', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/users/favoris/:id', {}, {
		get: {method:'GET', isArray:true},
	});
}]);


/*
.factory('StateNbArticle', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/statistics/article/:id', {}, {
		get: {method:'GET', isArray:true},
	});
}]);
.factory('StateNbPage', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/statistics/page/:id', {}, {
		get: {method:'GET', isArray:true},
	});
}]);
.factory('StateNbCommentByArticle', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/statistics/comment/article/:id', {}, {
		get: {method:'GET', isArray:true},
	});
}]);


;
*/
