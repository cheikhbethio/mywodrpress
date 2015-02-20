'use strict';

angular.module('myWordPress', [
	'myWordPress.registration',
	'myWordPress.master_template',
	'myWordPress.dashboard_template',
	'myWordPress.connection',
	'myWordPress.editProfile',
	'myWordPress.pages',
	'pageServices',
	'ui.bootstrap.showErrors',
	'ui.router',
	'uiRouterStyles'
])

.config(['$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state("app", {
		url: '/',
		views: {
            'header': {
                templateUrl: 'master_template/header.html',
                controller: 'mastertemplateController'
            },
            'content': {
                templateUrl: 'master_template/content.html'
            },
            'footer': {
                templateUrl: 'master_template/footer.html'
            }
        },
        data: { css: 'css/blog.css' }
	})
	.state("dashboard", {
		url: '/dashboard',
		views: {
            'header': {
                templateUrl: 'dashboard_template/header.html',
                controller: 'mastertemplateController'
            },
            'content': {
                templateUrl: 'dashboard_template/content.html'
            },
        },
        data: { css: 'css/dashboard.css' }
	});

}]);