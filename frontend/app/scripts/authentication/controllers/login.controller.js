(function(){
  'use strict';

  angular
    .module('todoApp.authentication.controllers')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$location', '$scope', 'authFactory'];

  function LoginController($location, $scope, authFactory) {
    var vm = this;

    vm.login = login;

    activate();

    function activate() {
      if (authFactory.isAuthenticated()) {
        $location.url('/');
      }
    }

    function login() {
      authFactory.login(vm.email, vm.password);
    }
  }
})();
