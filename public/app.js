var app = angular.module('kolesa', [
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
		.state('signup', {
			url: '/signup',
			templateUrl: '/views/signup.html',
			controller: 'SignupCtrl',
			controllerAs: 'vm'
		})
		.state('login', {
			url: '/login',
			templateUrl: '/views/login.html',
			controller: 'LoginCtrl',
			controllerAs: 'vm'
		})
		.state('postadd', {
			url: '/postadd',
			templateUrl: '/views/postadd.html',
			controller: 'PostaddCtrl',
			controllerAs: 'vm'
		})
		.state('postadd.mileage', {
			url: '/mileage',
			templateUrl: '/views/postadd-mileage.html',
			controller: 'MileageCtrl',
			controllerAs: 'vm'
		})
		.state('admin', {
			url: '/admin',
			templateUrl: '/views/admin.html',
			controller: 'AdminCtrl',
			controllerAs: 'vm'
		})
		.state('submenu', {
			url: '/submenu',
			templateUrl: '/views/submenu.html',
			controller: 'SubmenuCtrl',
			controllerAs: 'vm'
		})
		.state('submenu.vehicles', {
			url: '/vehicles',
			templateUrl: '/views/vehicles.html',
			controller: 'VehiclesCtrl',
			controllerAs: 'vm'
		})
		.state('vehicles.default', {
			url: '/default',
			templateUrl: '/views/vehicles-default.html'
		});
}