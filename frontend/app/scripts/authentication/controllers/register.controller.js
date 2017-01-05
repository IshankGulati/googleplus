(function() {
'use strict';

  angular
    .module('todoApp.authentication.controllers')
    .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$location', '$scope', 'authFactory'];
  function RegisterController ($location, $scope, authFactory) {
    var vm = this;

    vm.register = register;

    activate();

    function activate() {
      if(authFactory.isAuthenticated()) {
        $location.url('/');
      }
    }

    function register() {
      authFactory.register(vm.email, vm.password, vm.username);
    };
    // function register() {
    //   authFactory.register().save({
    //     email : vm.email,
    //     password : vm.password,
    //     username : vm.username
    //   });
    // }

  }
})();
