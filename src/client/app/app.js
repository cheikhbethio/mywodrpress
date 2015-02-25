'use strict';

angular.module('myWordPress', [
	'myWordPress.registration',
	'myWordPress.appTemplate',
	'myWordPress.dashboardTemplate',
	'myWordPress.connection',
	'myWordPress.editProfile',
	'myWordPress.pages',
	'myWordPress.editPage',
  'myWordPress.adminPage',
  'myWordPress.createPage',
	'myWordPress.userService',
  'myWordPress.pageService',
  'myWordPress.loginService',
	'ui.bootstrap.showErrors',
	'ui.router',
	'contenteditable',
	'uiRouterStyles',
    'ngStorage',
	'myWordPress.registration.registration-directive'
])

.config(['$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state("site", {
		url: '/',
		views: {
            'header': {
                templateUrl: 'site/appTemplate/header.html',
                controller: 'appTemplateController'
            },
            'content': {
                templateUrl: 'site/appTemplate/content.html'
            },
            'footer': {
                templateUrl: 'site/appTemplate/footer.html'
            }
        },
        data: { 
            css: 'site/appTemplate/blog.css',
            requireLogin: false
        }
	})
	.state("dashboard", {
		url: '/dashboard',
		views: {
            'header': {
                templateUrl: 'dashboard/dashboardTemplate/header.html',
                controller: 'dashboardTemplateController'
            },
            'content': {
                templateUrl: 'dashboard/dashboardTemplate/content.html'
            }
        },
        data: { 
            css: 'dashboard/dashboardTemplate/dashboard.css',
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
