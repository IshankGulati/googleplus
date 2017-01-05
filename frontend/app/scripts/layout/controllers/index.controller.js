/**
* IndexController
* @namespace todoApp.layout.controllers
*/
(function () {
  'use strict';

  angular
    .module('todoApp.layout.controllers')
    .controller('IndexController', IndexController);

  IndexController.$inject = ['$scope', 'authFactory', 'Posts', 'Snackbar'];

  /**
  * @namespace IndexController
  */
  function IndexController($scope, authFactory, Posts, Snackbar) {
    var vm = this;

    vm.isAuthenticated = authFactory.isAuthenticated();
    vm.posts = [];

    activate();

    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf todoApp.layout.controllers.IndexController
    */
    function activate() {
      Posts.all().then(postsSuccessFn, postsErrorFn);

      $scope.$on('post.created', function (event, post) {
        vm.posts.unshift(post);
      });

      $scope.$on('post.created.error', function () {
        vm.posts.shift();
      });


      /**
      * @name postsSuccessFn
      * @desc Update posts array on view
      */
      function postsSuccessFn(data, status, headers, config) {
        vm.posts = data.data;
      }


      /**
      * @name postsErrorFn
      * @desc Show snackbar with error
      */
      function postsErrorFn(data, status, headers, config) {
        Snackbar.error(data.error);
      }
    }
  }
})();