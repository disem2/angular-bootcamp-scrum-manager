(function() {
  'use strict';

  angular
    .module('bcAuth', [])
    .service('bcAuthService', Auth);

  /** @ngInject */
  function Auth($http, $q, $timeout) {
    this.registerUser = registerUser;

    function registerUser(user) {
      console.log(user);
      return $http.post('/api/signup',
        {
          "email": user.email,
          "password": user.password,
          "firstName": user.firstName,
          "lastName": user.lastName
        });
    }
  }

})();
