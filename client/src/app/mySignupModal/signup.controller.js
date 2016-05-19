(function() {
  'use strict';

  angular
    .module('client')
    .controller('SignupController', SignupController);

  /** @ngInject */
  function SignupController(SignupModalService) {
    var vm = this;

    var modatOptions = SignupModalService.getModalOptions();


  }
})();
//todo Make own modal like Angular UI bootstrap modal with resolve part
//Service, Controller, Template
