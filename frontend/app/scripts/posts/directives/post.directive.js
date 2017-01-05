/**
* Post
* @namespace todoApp.posts.directives
*/
(function () {
  'use strict';

  angular
    .module('todoApp.posts.directives')
    .directive('post', post);

  /**
  * @namespace Post
  */
  function post() {
    /**
    * @name directive
    * @desc The directive to be returned
    * @memberOf todoApp.posts.directives.Post
    */
    var directive = {
      restrict: 'E',
      scope: {
        post: '='
      },
      templateUrl: '/static/app/views/posts/post.html'
    };

    return directive;
  }
})();
