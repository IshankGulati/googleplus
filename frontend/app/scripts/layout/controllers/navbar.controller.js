(function() {
  'use strict';

  angular
    .module('todoApp.layout.controllers')
    .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$scope', 'authFactory'];

  function NavbarController($scope, authFactory) {
    var vm = this;

    vm.logout = logout;

    function logout() {
      authFactory.logout();
    }
  }
})();
