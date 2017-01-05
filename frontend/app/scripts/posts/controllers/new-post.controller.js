/**
* NewPostController
* @namespace todoApp.posts.controllers
*/
(function () {
  'use strict';

  angular
    .module('todoApp.posts.controllers')
    .controller('NewPostController', NewPostController);

  NewPostController.$inject = ['$rootScope', '$scope', 'authFactory', 'Snackbar', 'Posts'];

  /**
  * @namespace NewPostController
  */
  function NewPostController($rootScope, $scope, authFactory, Snackbar, Posts) {
    var vm = this;

    vm.submit = submit;

    /**
    * @name submit
    * @desc Create a new Post
    * @memberOf todoApp.posts.controllers.NewPostController
    */
    function submit() {
      $rootScope.$broadcast('post.created', {
        content: vm.content,
        author: {
          username: authFactory.getAuthenticatedAccount().username
        }
      });

      $scope.closeThisDialog();

      Posts.create(vm.content).then(createPostSuccessFn, createPostErrorFn);


      /**
      * @name createPostSuccessFn
      * @desc Show snackbar with success message
      */
      function createPostSuccessFn(data, status, headers, config) {
        Snackbar.show('Success! Post created.');
      }


      /**
      * @name createPostErrorFn
      * @desc Propogate error event and show snackbar with error message
      */
      function createPostErrorFn(data, status, headers, config) {
        $rootScope.$broadcast('post.created.error');
        Snackbar.error(data.error);
      }
    }
  }
})();