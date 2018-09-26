app.controller('MileageCtrl', MileageCtrl);

MileageCtrl.$inject = ['$http', '$scope', '$state'];

function MileageCtrl($http, $scope, $state) {
	var vm = this;
	vm.cars = [];
	vm.models = [];
	vm.types = ['седан', 'универсал', 'хэтчбук/лифтбек', 'лимузин', 'купе', 'родстер', 'кабриолет', 'внедорожник', 'кроссовер', 'микровэн', 'минивэн', 'микроавтобус', 'фургон', 'пикап'];
	vm.engine_types = ['бензин', 'дизель', 'газ-бензин', 'газ', 'гибрид', 'электричество'];
	vm.transmissions = ['механика', 'автомат', 'типтроник', 'вариатор', 'робот'];
	vm.mileage_units = ['км', 'мили'];
	vm.wheels = ['слева', 'справа'];
	vm.colors = ['бронза', 'вишня', 'хамелеон', 'бежевый', 'белый', 'бирюзовый', 'бордовый', 'голубой', 'желтый', 'зеленый', 'золотистый', 'коричневый', 'красный', 'оранжевый', 'розовый', 'серебристый', 'серый', 'синий', 'сиреневый', 'фиолетовый', 'черный'];
	vm.checkboxModel = false;
	vm.presences = ['В наличии', 'На заказ'];
	vm.cleareds = ['Да', 'Нет'];
	vm.states = ['На ходу', 'Не на ходу', 'Аварийная'];
	vm.drives = ['передний привод', 'Полный привод', 'задний привод'];
	vm.files = [];
	vm.checkboxCosent = false;
	vm.auth = false;


	// vm.car;
	// vm.model;
	// vm.type;
	// vm.year;
	// vm.price;
	// vm.engine;
	// vm.engine_type;
	// vm.vin;
	// vm.transmission;
	// vm.mileage;
	// vm.mileage_unit;
	// vm.wheel;
	// vm.color;
	// vm.presence;
	// vm.cleared;
	// vm.state;
	// vm.drive;
	// vm.text;
	// vm.region;
	// vm.phone;
	// vm.email;
	// vm.file;



	$http.get('/api/car/mileage')
		.success(function(response) {
			vm.cars = response;
		})
		.error(function(err) {
			console.log(err);
		})

	$http.get('/api/region')
		.success(function(response) {
			vm.regions = response;
		})
		.error(function(err) {
			console.log(err);
		})


	vm.selectedBrand = function(car) {
		vm.car = car;
		vm.models = car.models;
		vm.activeCar = car._id;
		console.log(vm.models);
	}

	vm.selectedModel = function(model) {
		vm.model = model;
		vm.activeModel = model._id;
		console.log(vm.model);
	}

	vm.selectType = function(type) {
		vm.type = type;
		vm.activeType = type;
	}

	vm.selectEngineType = function(engine_type) {
		vm.engine_type = engine_type;
		vm.activeEngineType = engine_type;
	}

	vm.selectTransmission = function(transmission) {
		vm.transmission = transmission;
		vm.activeTransmission = transmission;
	}

	vm.selectMileage_unit = function(mileage_unit) {
		vm.mileage_unit = mileage_unit;
		vm.activeMileage_unit = mileage_unit;
	}

	vm.selectWheel = function(wheel) {
		vm.wheel = wheel;
		vm.activeWheel = wheel;
	}

	vm.selectColor = function (color) {
		if (vm.checkboxModel == true) {
			vm.color = color + ' металлик';
		} else {
			vm.color = color;
		}
		
		console.log(vm.color);
	}

	vm.selectPresence = function(presence) {
		vm.presence = presence;
		vm.activePresence = presence;
	}

	vm.selectCleared = function(cleared) {
		vm.cleared = cleared;
		vm.activeCleared = cleared;
	}

	vm.selectState = function(state) {
		vm.state = state;
		vm.activeState = state;
	}

	vm.selectDrive = function(drive) {
		vm.drive = drive;
		vm.activeDrive = drive;
	}

	// vm.uploadFile = function(file) {
	// 	vm.files.push(file);
	// 	console.log(vm.files);
	// }

	vm.selectRegion = function(region) {
		vm.region = region;
		console.log(vm.region);
	}

	vm.signUp = function() {
		var data = {
			email: vm.email,
			phone: vm.phone,
			password: vm.password
		}

		$http.post('/api/signup', data)
			.success(function(response) {
				vm.auth = true;
				console.log(vm.auth);
			})
			.error(function(err) {
				console.log(err);
			})
	}

	vm.saveAd = function() {

		var data = new FormData();

		data.append('brand', vm.car._id);
		data.append('model', vm.model._id);
		data.append('type', vm.type);
		data.append('year', vm.year);
		data.append('price', vm.price);
		data.append('engine', vm.engine);
		data.append('engine_type', vm.engine_type);
		data.append('vin', vm.vin);
		data.append('transmission', vm.transmission);
		data.append('mileage', vm.mileage);
		data.append('mileage_unit', vm.mileage_unit);
		data.append('wheel', vm.wheel);
		data.append('color', vm.color);
		data.append('presence', vm.presence);
		data.append('cleared', vm.cleared);
		data.append('state', vm.state);
		data.append('drive', vm.drive);
		data.append('text', vm.text);
		data.append('region', vm.region._id);
		data.append('phone', vm.phone);
		data.append('email', vm.email);
		data.append('file', vm.file);

		$http.post('/api/post_car', data, {
			headers: {'Content-Type': undefined},
			transformRequest: angular.identity
		})
		.success(function(response) {
			console.log(response);
		})
		.error(function(err) {
			console.log(err);
		})
	}

	

}