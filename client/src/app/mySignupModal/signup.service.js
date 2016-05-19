(function() {
  'use strict';

  angular
    .module('client')
    .service('SignupModalService', SignupModal);

  /** @ngInject */
  function SignupModal($http, $compile) {
    var modalOptions = {};
    var templateUrl = '';

    this.open = function (options) {
      modalOptions = options;
      templateUrl = modalOptions.templateUrl;

      addModal();
    };

    this.getModalOptions = function () {
      return modalOptions;
    };
    function addModal() {
      $http.get(templateUrl)
        .then(function(response){
          document.body.html($compile(response.data)(modalOptions));
        });
    }
  }

})();
