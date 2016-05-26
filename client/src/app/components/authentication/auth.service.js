(function() {
  'use strict';

  angular
    .module('bcAuth', [])
    .service('bcAuthService', Auth);

  /** @ngInject */
  function Auth($http) {
    this.registerUser = registerUser;
    this.logIn = logIn;

    function registerUser(user) {
      return $http.post('/api/signup',
        {
          "email": user.email,
          "password": user.password,
          "firstName": user.firstName,
          "lastName": user.lastName
        });
    }
    function logIn(user) {
      return $http.post('/api/signin',
        {
          "email": user.email,
          "password": user.password
        });
    }
  }

})();
