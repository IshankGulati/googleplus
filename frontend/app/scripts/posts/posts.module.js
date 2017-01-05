(function () {
  'use strict';

  angular
    .module('todoApp.posts', [
      'todoApp.posts.controllers',
      'todoApp.posts.directives',
      'todoApp.posts.services'
    ]);

  angular
    .module('todoApp.posts.controllers', []);

  angular
    .module('todoApp.posts.directives', ['ngDialog']);

  angular
    .module('todoApp.posts.services', []);
})();