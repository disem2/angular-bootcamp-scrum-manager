(function() {
  'use strict';

  angular
    .module('client')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $uibModal, SignupModalService) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1463506703415;
    vm.showToastr = showToastr;

    vm.openSignUp = function () {
      SignupModalService.open({
        templateUrl: 'app/mySignupModal/signup.html',
        controller: 'SignupController'
      });

      //var modalInstance = $uibModal.open({
      //  animation: true,
      //  templateUrl: 'app/signupModal/signup.html',
      //   controller: 'SignupController',
      //  size: 'md'
      //});
      //
      //modalInstance.result.then(function () {
      //}, function () {
      //  $log.info('Modal dismissed at: ' + new Date());
      //});
    };

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
//todo Make own modal like Angular UI bootstrap modal with resolve part
//Service, Controller, Template
