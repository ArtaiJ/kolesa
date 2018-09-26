app.controller('VehiclesCtrl', VehiclesCtrl);

VehiclesCtrl.$inject = ['$http', '$scope', '$rootScope'];

function VehiclesCtrl($http, $scope, $rootScope) {
	var vm = this;
	
	vm.submenus = ['Легковые с пробегом', 'Легковые новые', 'Автосалоны', 'Мототехника'];
	vm.regionBlock = false;
	vm.brandBlock = false;
	vm.modelBlock = false;
	vm.showModels = [];

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

	vm.selectSubmenu = function(submenu) {
		vm.submenu = submenu;
	}

	vm.selectRegion = function(region) {
		var index = vm.showRegions.indexOf(region);
		if (index == -1) {
			vm.showRegions[4] = region;
		}
		vm.region = region;
		vm.activeRegion = region;
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
		vm.brand = brand;
		vm.activeBrand = brand;
		vm.models = brand.models;
		vm.showModels = brand.models.slice(0, 5);
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
		vm.model = model;
		vm.activeModel = model;
	}

	vm.changeModel = function() {
		if (vm.modelBlock == false) {
			vm.modelBlock = true;
		} else if (vm.modelBlock == true) {
			vm.modelBlock = false;
		}
	}


}