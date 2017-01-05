(function (){
  'use strict';

  angular
    .module('todoApp.authentication',[
      'todoApp.authentication.controllers',
      'todoApp.authentication.services'
    ]);

  angular
    .module('todoApp.authentication.controllers', []);

  angular
    .module('todoApp.authentication.services', [
      'ngCookies',
      'ngResource'
    ]);
})();
