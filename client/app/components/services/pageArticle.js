angular.module('myWordPress.pageArticleService', ['ngResource'])

.factory('PageArticle', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/pages/:id/article/:idart', {}, {    	
     	update: {method:'PUT', isArray:false},
     	remove : {method : 'DELETE', isArray:false}
    });
  }]);
