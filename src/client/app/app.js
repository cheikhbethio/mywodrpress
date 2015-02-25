'use strict';

angular.module('myWordPress', [
	'myWordPress.registration',
	'myWordPress.siteTemplate',
	'myWordPress.dashboardTemplate',
	'myWordPress.connection',
	'myWordPress.editProfile',
	'myWordPress.pages',
    'myWordPress.adminPage',
    'myWordPress.createPage',
	'myWordPress.userService',
    'myWordPress.pageService',
    'myWordPress.loginService',
	'ui.bootstrap.showErrors',
	'ui.router',
	'uiRouterStyles',
    'ngStorage',
	'myWordPress.registration.registration-directive',
    'myWordPress.siteTemplate.siteTemplate-directive'
])

.config(['$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state("site", {
		url: '/',
		views: {
            'header': {
                templateUrl: 'site/siteTemplate/header.html',
                controller: 'siteTemplateController'
            },
            'content': {
                templateUrl: 'site/siteTemplate/content.html'
            },
            'footer': {
                templateUrl: 'site/siteTemplate/footer.html'
            }
        },
        data: { 
            css: 'site/siteTemplate/blog.css',
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

}])