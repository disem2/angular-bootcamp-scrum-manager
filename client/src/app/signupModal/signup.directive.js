(function() {
  'use strict';

  angular
    .module('client')
    .directive('signupModal', modal);

  /** @ngInject */
  function modal() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/signupModal/signup.html',
      controller: SignupController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SignupController() {
      console.log('resolve');
    }
  }

})();
