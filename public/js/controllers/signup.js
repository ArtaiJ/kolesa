app.controller('SignupCtrl', SignupCtrl);

SignupCtrl.$inject = ['$http', '$scope', '$state', '$rootScope'];

function SignupCtrl($http, $scope, $state, $rootScope) {
	var vm = this;

	vm.signUp = function() {
		var data = {
			email: vm.email,
			phone: vm.phone,
			password: vm.password
		}

		$http.post('/api/signup', data)
			.success(function(response) {
				$state.go('login');
			})
			.error(function(err) {
				console.log(err);
			})
	}
}