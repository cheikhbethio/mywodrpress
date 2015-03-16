'use strict';

/* Services */

angular.module('myWordPress.statisticService', ['ngResource'])
.factory('StateNbComment', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/statistics/articlecomment/:id', {}, {
		get: {method:'GET', isArray:false},
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