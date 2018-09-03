app.controller('AdminCtrl', AdminCtrl);

AdminCtrl.$inject = ['$http', '$scope'];

function AdminCtrl($http, $scope) {
	var vm = this;
	vm.objectToEdit = null;
	vm.homelands = [];
	vm.cars = [];

	

	$http.get('/api/car/admin')
		.success(function(response) {
			vm.cars = response;
		})
		.error(function(err) {
			console.log(err);
		})

	$http.get('/api/homeland/admin')
		.success(function(response) {
			vm.homelands = response;
		})
		.error(function(err) {
			console.log(err);
		})






	vm.saveCountry = function() {
		

		var data = {
			land: vm.homeland
		}

		$http.post('/api/homeland', data)
			.success(function(response) {
				vm.homelands.push(response);
				console.log(response);
			})

			.error(function(err) {
				console.log(err);
			})

	}

	vm.selectLand = function (land) {
		vm.land = land;
		vm.land_id = land._id;
		console.log(vm.land.land);
	}

	vm.saveCar = function() {
		

		var data = {
			title: vm.brand_name,
			country: vm.land_id
		}

		$http.post('/api/car/' + vm.land_id, data)
			.success(function(response) {
				vm.cars.push(response);
			})

			.error(function(err) {
				console.log(err);
			})

	}


	vm.selectBrand = function (brand) {
		vm.brand = brand;
		vm.brand_id = brand._id;
		console.log(vm.brand.title);
	}


	vm.addModel = function() {


		console.log(vm.brand);
		

		var data = {
			name: vm.name,
			brand: vm.brand_id
		}

		console.log(vm.brand_id);

		$http.post('/api/model/' + vm.brand_id, data)
			.success(function(response) {
				console.log(response);
				vm.brand.models.push(response);
			})
			.error(function(err) {
				console.log(err)
			});

		console.log('success');
	}

	

}