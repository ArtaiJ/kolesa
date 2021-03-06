app.controller('VehiclesCtrl', VehiclesCtrl);

VehiclesCtrl.$inject = ['$http', '$scope', '$rootScope'];

function VehiclesCtrl($http, $scope, $rootScope) {
	var vm = this;
		
	vm.regionBlock = false;
	vm.brandBlock = false;
	vm.modelBlock = false;
	vm.settingsBlock = false;
	vm.showModels = [];

	vm.cleared = false;
	vm.photo = false;
	vm.urgently = false;

	$http.get('/api/region')
		.success(function(response) {
			vm.regions = response;
			vm.showRegions = [response[0], response[1], response[2], response[3], response[4]];
		})
		.error(function(err) {
			console.log(err);
		})


	$http.get('/api/car/mileage')
		.success(function(response) {
			vm.brands = response;
			vm.showBrands = [response[0], response[1], response[2], response[3], response[4]];
		})
		.error(function(err) {
			console.log(err);
		})

	vm.selectClipart = function(clipart) {

		if (vm.activeClipart == clipart) {
			vm.body = '';
			vm.activeClipart = 0;
		} else {
			if (clipart == 1) {
				vm.body = 'light';
				vm.activeClipart = 1;
			} else if (clipart == 2) {
				vm.body = 'suv';
				vm.activeClipart = 2;
			} else if (clipart == 3) {
				vm.body = 'minivan';
				vm.activeClipart = 3;
			}
		}
	}

	vm.selectRegion = function(region) {
		var index = vm.showRegions.indexOf(region);
		if (index == -1) {
			vm.showRegions[4] = region;
		}
		if (vm.activeRegion == region) {
			vm.region = '';
			vm.activeRegion = '';
		} else {
			vm.region = region;
			vm.activeRegion = region;
		}

	}

	vm.changeCity = function() {
		if (vm.regionBlock == false) {
			vm.regionBlock = true;
		} else if (vm.regionBlock == true) {
			vm.regionBlock = false;
		}
	}

	vm.selectBrand = function(brand) {
		var mark = vm.showBrands.indexOf(brand);
		if (mark == -1) {
			vm.showBrands[4] = brand;
		}
		if (vm.activeBrand == brand) {
			vm.brand = '';
			vm.model = '';
			vm.activeBrand = '';
			vm.models = [];
			vm.showModels = [];
		} else {
			vm.brand = brand;
			vm.activeBrand = brand;
			vm.models = brand.models;
			vm.showModels = brand.models.slice(0, 5);
		}
	}

	vm.changeBrand = function() {
		if (vm.brandBlock == false) {
			vm.brandBlock = true;
		} else if (vm.brandBlock == true) {
			vm.brandBlock = false;
		}
	}

	vm.selectModel = function(model) {
		var mod = vm.showModels.indexOf(model);
		if (mod == -1) {
			vm.showModels[4] = model;
		}
		if (vm.activeModel == model) {
			vm.model = '';
			vm.activeModel = '';
		} else {
			vm.model = model;
			vm.activeModel = model;
		}
	}

	vm.changeModel = function() {
		if (vm.modelBlock == false) {
			vm.modelBlock = true;
		} else if (vm.modelBlock == true) {
			vm.modelBlock = false;
		}
	}

	



	vm.changeSettings = function() {
		if (vm.settingsBlock == false) {
			vm.settingsBlock = true;
		} else if (vm.settingsBlock == true) {
			vm.settingsBlock = false;
		}
	}


}