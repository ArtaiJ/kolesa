app.controller('HeaderCtrl', HeaderCtrl);


HeaderCtrl.$inject = ['$http', '$scope', '$cookies', '$rootScope', '$state'];

function HeaderCtrl($http, $scope, $cookies, $rootScope, $state) {
	var vm = this;
	vm.regions = [];

	if($cookies.getObject('session')) {
		$rootScope.session = $cookies.getObject('session');
	}
	
	vm.logout = function() {
		$http.post('/api/logout')
			.success(function(response) {
				$rootScope.session = undefined;
				$state.go('home');
			})
			.error(function(err) {
				console.log(err);
			})
	}



	$http.get('/api/region')
		.success(function(response) {
			vm.regions = response;
		})
		.error(function(err) {
			console.log(err);
		})

	vm.selectRegion = function (region) {
		vm.region = region;
		console.log(vm.region.place);
	}
	

}