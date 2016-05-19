(function() {
  'use strict';

  angular
    .module('client.main')
    .controller('SignupController', SignupController);

  /** @ngInject */
  function SignupController($log, r1, r2) {
    var vm = this;
    
    vm.title = 'Sign Up Modal';
    
    console.log(r1);
    console.log(r2);
    
    activate();
    
    function activate() {
      
    }
  }
})();
//todo Make own modal like Angular UI bootstrap modal with resolve part
//Service, Controller, Template
