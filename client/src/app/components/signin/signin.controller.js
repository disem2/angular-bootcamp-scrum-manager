(function() {
  'use strict';

  angular
    .module('bcAuth')
    .controller('SigninController', SignupController);

  /** @ngInject */
  function SignupController($q, bcSignupService) {
    var vm = this;

    vm.title = 'Sign Up Modal';

    vm.saveUser = saveUser;


    activate();

    function activate() {

    }
    function login() {
      var user = {
        name: vm.userName,
        email: vm.email,
        password: vm.password
      };
      bcSignupService.registerUser(user).then(function (result) {
        console.log(result);
      }, function (err) {
        console.log(err);
      });
    }
  }
})();
//todo Make own modal like Angular UI bootstrap modal with resolve part
//Service, Controller, Template