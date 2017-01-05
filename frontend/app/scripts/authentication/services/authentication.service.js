(function(){
  'use strict';

  angular
    .module('todoApp.authentication.services')
    .factory('authFactory', authFactory);

  authFactory.$inject = ['$http', '$cookies', '$resource'];

  function authFactory ($http, $cookies, $resource) {
    var authFactory = {
      register: register,
      login : login,
      logout : logout,
      isAuthenticated : isAuthenticated,
      setAuthenticatedAccount : setAuthenticatedAccount,
      getAuthenticatedAccount : getAuthenticatedAccount,
      unauthenticate : unauthenticate
    };

    return authFactory;

    function register(email, password, username) {
      return $http.post('/api/v1/accounts/', {
        username: username,
        password: password,
        email: email
      }).then(registerSuccessFn, registerErrorFn);

      function registerSuccessFn(data, status, headers, config) {
        authFactory.login(email, password);
      }

      function registerErrorFn(data, status, login, config) {
        console.error('Epic failure!!');
      }
    }

    // function register () {
    //   return $resource('/api/v1/accounts/');
    // }

    function login(email, password) {
      return $http.post('/api/v1/auth/login/', {
        email: email,
        password: password
      }).then(loginSuccessFn, loginErrorFn);

      function loginSuccessFn(data, status, headers, config) {
        authFactory.setAuthenticatedAccount(data.data);

        window.location = '/';
      }

      function loginErrorFn(data, status, headers, config) {
        console.error('Epic failure!');
      }
    }

    function getAuthenticatedAccount() {
      if(!$cookies.getObject('authenticatedAccount')) {
        return;
      }
      return $cookies.getObject('authenticatedAccount');
    }

    function isAuthenticated() {
      return !!$cookies.getObject('authenticatedAccount');
    }

    function setAuthenticatedAccount(account) {
      $cookies.putObject('authenticatedAccount', account);
      authFactory.isAuthenticated();
    }

    function unauthenticate() {
      $cookies.remove('authenticatedAccount');
    }

    function logout() {
      return $http.post('/api/v1/auth/logout/')
        .then(logoutSuccessFn, logoutErrorFn);

      function logoutSuccessFn(data, status, headers, config) {
        authFactory.unauthenticate();
        window.location = '/';
      }

      function logoutErrorFn(data, status, headers, config) {
        console.Error('Epic failure!!');
      }
    }
  }
})();
