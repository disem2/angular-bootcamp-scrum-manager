(function() {
  'use strict';

  angular
    .module('bootcamp')
    .controller('SignupController', SignupController);

  /** @ngInject */
  function SignupController() {
    var vm = this;

    vm.title = 'Sign Up Modal';

    vm.saveUser = saveUser;


    activate();

    function activate() {

    }
    function saveUser() {
      console.log('SAVED');
    }
  }
})();
//todo Make own modal like Angular UI bootstrap modal with resolve part
//Service, Controller, Template
