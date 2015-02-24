'use strict';

angular.module('myWordPress', [
	'myWordPress.registration',
	'myWordPress.appTemplate',
	'myWordPress.dashboardTemplate',
	'myWordPress.connection',
	'myWordPress.editProfile',
	'myWordPress.pages',
	'pageServices',
	'ui.bootstrap.showErrors',
	'ui.router',
	'uiRouterStyles',
	'myWordPress.registration.registration-directive'
])

.config(['$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state("app", {
		url: '/',
		views: {
            'header': {
                templateUrl: 'appTemplate/header.html',
                controller: 'appTemplateController'
            },
            'content': {
                templateUrl: 'appTemplate/content.html'
            },
            'footer': {
                templateUrl: 'appTemplate/footer.html'
            }
        },
        data: { 
            css: 'appTemplate/blog.css',
            requireLogin: false
        }
	})
	.state("dashboard", {
		url: '/dashboard',
		views: {
            'header': {
                templateUrl: 'dashboardTemplate/header.html',
                controller: 'dashboardTemplateController'
            },
            'content': {
                templateUrl: 'dashboardTemplate/content.html'
            },
        },
        data: { 
            css: 'dashboardTemplate/dashboard.css',
            requireLogin: true
        }
	});

}]).directive('scrollToItem', function() {                                                      
    return {                                                                                 
        restrict: 'A',                                                                       
        scope: {                                                                             
            scrollTo: "@"                                                                    
        },                                                                                   
        link: function(scope, $elm,attr) {                                                   

            $elm.on('click', function() {                                                    
                $('html,body').animate({scrollTop: 0}, "slow");
            });                                                                              
        }                                                                                    
}});
