app.controller('SubmenuCtrl', SubmenuCtrl);

SubmenuCtrl.$inject = ['$http', '$scope', '$rootScope', '$state'];

function SubmenuCtrl($http, $scope, $rootScope, $state) {
	var vm = this;
	
	vm.submenus = ['Легковые с пробегом', 'Легковые новые', 'Автосалоны', 'Мототехника'];
	
	vm.selectSubmenu = function(submenu) {
		if (submenu == 'Легковые с пробегом') {
			$state.go('submenu.vehicles');
		}
	}	
}