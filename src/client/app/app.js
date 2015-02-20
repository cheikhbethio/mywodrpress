'use strict';

angular.module('myWordPress', [
	'myWordPress.registration',
	'myWordPress.master_template',
	'myWordPress.connection',
	'myWordPress.editProfile',
	'myWordPress.pages',
	'ui.bootstrap.showErrors',
	'ui.router',
	'pageServices'
])

.config(['$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider.state("app", {
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
        }
	});

}]);