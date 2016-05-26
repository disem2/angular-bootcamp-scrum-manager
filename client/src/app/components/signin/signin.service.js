(function() {
  'use strict';

  angular
    .module('bcSignin', [])
    .service('bcSigninService', Signin);

  /** @ngInject */
  function Signin($http, $q, $timeout) {
    this.registerUser = registerUser;

    function registerUser(user) {
      
    }
  }

})();
