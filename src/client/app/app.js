'use strict';

angular.module('myWordPress', [
    // site
	'myWordPress.registration',
	'myWordPress.siteTemplate',
	'myWordPress.connection',
	'myWordPress.editProfile',
	'myWordPress.pages',
    'myWordPress.site.article',
    'myWordPress.site.home',
    'myWordPress.searchKeyWord',

    // admin
    'myWordPress.editPage',
    'myWordPress.adminPage',
    'myWordPress.createPage',
    'myWordPress.admin.article',
    'myWordPress.admin.home',
    'myWordPress.sitePreferences',
    'myWordPress.site.article',
    'myWordPress.pageArticleService',
    'myWordPress.admin.menu',
    'myWordPress.dashboardTemplate',

    // libs
    'colorpicker.module',
	'ui.bootstrap.showErrors',
	'ui.router',
	'contenteditable',
    'ngStorage',    
    'textAngular',
    'snap',

    // services
    'myWordPress.pageArticleService',
    'myWordPress.userService',
    'myWordPress.pageService',
    'myWordPress.articleService',
    'myWordPress.loginService',
    'myWordPress.service.articleHome',

    // directives
	'myWordPress.registration.registration-directive',
    'myWordPress.siteTemplate.siteTemplate-directive'
])

.config(['$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state("site", {
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
                templateUrl: 'dashboard/dashboardTemplate/content.html',
                controller: 'dashboardTemplateController'
            }
        },
        data: { 
            requireLogin: true
        }
	});

}]).run(function ($rootScope,  $state) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
        var requireLogin = toState.data.requireLogin;

        if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
            event.preventDefault();
            console.log($state);
            $state.go('site.connection');
        } 
  });

});