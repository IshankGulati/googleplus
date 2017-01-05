(function(){
  'use strict';

/**
 * @ngdoc overview
 * @name todoApp
 * @description
 * # todoApp
 *
 * Main module of the application.
 */
  angular
    .module('todoApp.routes', ['ui.router'])
    .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  function config ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url : '/',
        views : {
          'content' : {
            templateUrl : '/static/app/views/layout/index.html',
            controller : 'IndexController',
            controllerAs : 'vm'
          }
        }
      })
      .state('register', {
        url : '/register',
        views : {
          'content' : {
            templateUrl : '/static/app/views/authentication/register.html',
            controller : 'RegisterController',
            controllerAs : 'vm'
          }
        }
      })
      .state('login', {
        url : '/login',
        views : {
          'content' : {
            templateUrl : '/static/app/views/authentication/login.html',
            controller : 'LoginController',
            controllerAs : 'vm'
          }
        }
      })
      .state('profile', {
        url : '/+:username',
        views : {
          'content' : {
            templateUrl : '/static/app/views/profiles/profile.html',
            controller : 'ProfileController',
            controllerAs : 'vm'
          }
        }
      })
      .state('settings', {
        url : '/+:username/settings',
        views : {
          'content' : {
            templateUrl : '/static/app/views/profiles/settings.html',
            controller : 'ProfileSettingsController',
            controllerAs : 'vm'
          }
        }
      })
      ;

    $urlRouterProvider.otherwise('/');
  }
})();