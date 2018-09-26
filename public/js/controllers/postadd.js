app.controller('PostaddCtrl', PostaddCtrl);

PostaddCtrl.$inject = ['$http', '$scope', '$state'];

function PostaddCtrl($http, $scope, $state) {
	var vm = this;
	vm.menus = ['Машины', 'Запчасти', 'Ремонт и услуги', 'Коммерческие', 'Прочее'];
	vm.menu = vm.menus[0];
	vm.vehicles = ['Легковые с пробегом', 'Легковые новые', 'Автосалоны', 'Мототехника', 'Водный транспорт'];
	vm.spare_parts = ['Продажа запчастей', 'Шины', 'Диски', 'Аксессуары и мультимедия', 'Расходники', 'Авто на запчасти', 'Магазины шин и дисков', 'Магазины запчастей и авторазборы'];
	vm.services = ['Ремонт', 'Услуги', 'Тюнинг', 'Другие'];
	vm.commercial = ['Грузовики', 'Автобусы', 'Спецтехника', 'Продавцы спецтехники', 'Продавцы запчастей', 'Запчасти', 'Аренда', 'Услуги (коммерческие)', 'Шины и диски'];
	vm.other = ['Прочее'];
	vm.submenu_items = vm.vehicles;
	vm.submenu = vm.submenu_items[0];


	vm.selectMenu = function(menu) {
		vm.menu = menu;

		if (vm.menu == vm.menus[0]) {
			vm.submenu_items = vm.vehicles;
			vm.submenu = vm.vehicles[0];
		} else if (vm.menu == vm.menus[1]) {
			vm.submenu_items = vm.spare_parts;
			vm.submenu = vm.spare_parts[0];
		} else if (vm.menu == vm.menus[2]) {
			vm.submenu_items = vm.services;
			vm.submenu = vm.services[0];
		} else if (vm.menu == vm.menus[3]) {
			vm.submenu_items = vm.commercial;
			vm.submenu = vm.commercial[0];
		} else if (vm.menu == vm.menus[4]) {
			vm.submenu_items = vm.other;
			vm.submenu = vm.other[0];
		} 

		console.log(menu);
	}

	vm.selectSubmenu = function(submenu) {
		vm.submenu = submenu;
		$state.go('postadd.mileage');
		console.log(submenu);
	}

	

}