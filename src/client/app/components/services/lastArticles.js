angular.module('myWordPress.lastArticleService', ['ngResource'])

.factory('LastArticle', ['$resource', function($resource){
	return $resource('http://localhost:4711/api/last_articles', {}, {    	
    	getLast: {method:'GET', isArray:true}
    });
  }]);
