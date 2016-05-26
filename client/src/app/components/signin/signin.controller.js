(function() {
  'use strict';

  angular
    .module('bcAuth')
    .controller('SigninController', SigninController);

  /** @ngInject */
  function SigninController($q, bcAuthService) {
    var vm = this;

    vm.title = 'Sign Up Modal';

    vm.login = login;


    activate();

    function activate() {

    }
    function login() {
      var user = {
        email: vm.email,
        password: vm.password
      };
      bcAuthService.logIn(user).then(function (result) {
        console.log(result);
      }, function (err) {
        console.log(err);
      });
    }
  }
})();
