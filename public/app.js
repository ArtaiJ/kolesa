var app = angular.module('gorilla', [
	'ui.router',
	'ngCookies'
]);

app.config(routeConfig);

routeConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '/views/home.html',
			controller: 'MainCtrl',
			controllerAs: 'vm'
		})

}