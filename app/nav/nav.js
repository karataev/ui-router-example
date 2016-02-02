
angular.module('app')

  .directive('navigation', ['$location', '$state', function ($location, $state) {

    function controller() {
      var vm = this;

      vm.isActive = function (path) {
        return $state.includes(path);
      };

      vm.isActive();
    }

    return {
      controller: controller,
      controllerAs: 'nav',
      replace: true,
      templateUrl: 'nav/nav.html'
    }
  }])