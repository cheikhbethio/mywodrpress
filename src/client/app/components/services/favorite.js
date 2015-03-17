'use strict';

/* Services */

angular.module('myWordPress.favoriteService', ['ngResource'])
.factory('AddFavorite', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/favoris', {}, {
		post: {method:'POST', isArray:false},
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

/******statistiques

app.get('/api/statistics/comment/:id', comment.getNbcomment);
app.get('/api/statistics/article/:id', article.getNbArticle);
app.get('/api/statistics/page/:id', page.getNbPage);
app.get('/api/statistics/comment/article/:id', comment.getNbcommentByArticle);
*******/