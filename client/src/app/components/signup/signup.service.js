(function() {
  'use strict';

  angular
    .module('bcSignup', [])
    .service('bcSignupService', SignupModal);

  /** @ngInject */
  function SignupModal($http, $q, $timeout) {
    this.registerUser = registerUser;

    function registerUser(user) {
      console.log(user);
      return $timeout(function () {
        return 'success';
      }, 0);
    }
  }

})();
