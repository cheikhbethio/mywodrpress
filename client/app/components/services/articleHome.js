angular.module('myWordPress.service.articleHome', ['ngResource'])

.factory('ArticleHome', ['$resource', function($resource){
	return $resource('/api/articles/home/:id', {}, {    	
    	switch: {method:'PUT', isArray:false}
    });
  }]);
