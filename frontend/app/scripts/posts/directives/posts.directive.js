/**
* Posts
* @namespace todoApp.posts.directives
*/
(function () {
  'use strict';

  angular
    .module('todoApp.posts.directives')
    .directive('posts', posts);

  /**
  * @namespace Posts
  */
  function posts() {
    /**
    * @name directive
    * @desc The directive to be returned
    * @memberOf todoApp.posts.directives.Posts
    */
    var directive = {
      controller: 'PostsController',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
        posts: '='
      },
      templateUrl: '/static/app/views/posts/posts.html'
    };

    return directive;
  }
})();