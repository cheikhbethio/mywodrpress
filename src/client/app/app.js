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
    'myWordPress.site.searchKeyWord',
    

    // admin
    'myWordPress.editPage',
    'myWordPress.adminPage',
    'myWordPress.createPage',
	'myWordPress.userService',
    'myWordPress.pageService',
    'myWordPress.articleService',
    'myWordPress.commentService',
    'myWordPress.loginService',
    'myWordPress.admin.article',
    'myWordPress.admin.home',
    'myWordPress.sitePreferences',
    'myWordPress.site.article',
    'myWordPress.pageArticleService',
    'myWordPress.preferenceService',
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
    'ngToast',
    'minicolors',

    // services
    'myWordPress.keywordService',
    'myWordPress.pageArticleService',
    'myWordPress.userService',
    'myWordPress.pageService',
    'myWordPress.articleService',
    'myWordPress.loginService',
    'myWordPress.service.articleHome',
    'myWordPress.service.menuService',

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
                templateUrl: 'site/siteTemplate/content.html',
                controller: 'siteTemplateController'
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

}])

.config(['ngToastProvider', function(ngToast) {
    ngToast.configure({
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      maxNumber: 1,
      dismissOnTimeout: true,
      timeout: 2000
    });
}])

.config(function (minicolorsProvider) {
    angular.extend(minicolorsProvider.defaults, {
        theme: 'bootstrap'
    });
})

.run(function ($rootScope,  $state) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
        var requireLogin = toState.data.requireLogin;

        if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
            event.preventDefault();
            console.log($state);
            $state.go('site.connection');
        } 
  });

});