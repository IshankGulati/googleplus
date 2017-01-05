(function(){
  'use strict';

  angular
    .module('todoApp', [
      'todoApp.routes',
      'todoApp.authentication',
      'todoApp.config',
      'todoApp.layout',
      'todoApp.posts',
      'todoApp.profiles',
      'todoApp.utils'
    ]);

  angular
    .module('todoApp.routes', [
      'ui.router'
    ]);

  angular
    .module('todoApp.config', []);

  angular
    .module('todoApp')
    .run(run);

  run.$inject = ['$http'];

  /**
   * @name run
   * @desc Update xsrf $http headers to align with Django's defaults
   */
  function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
  }
})();
