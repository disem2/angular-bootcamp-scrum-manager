(function() {
  'use strict';

  angular
    .module('client.main', [])
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $uibModal, bcSignupModalService, $log, $scope) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1463506703415;
    vm.isSidebarOpen = false;

    vm.showToastr = showToastr;
    vm.openSignUp = showSignupModal;
    vm.toggleSidebar = toggleSidebar;

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

    function showSignupModal() {

      bcSignupModalService.open({
        templateUrl: 'app/mySignupModal/signup.html',
        controller: 'SignupController as signup',
        scope: $scope,
        resolve: {
          r1: function ($timeout) {
            return  $timeout(function () {
              return 'Resolved r1';
            }, 100);
          },
          r2: function ($timeout) {
            return  $timeout(function () {
              return 'Resolved r2';
            }, 100);
          }
        }
      }).then(function (result) {
        $log.log(result);
      }).catch(function (err) {
        $log.log(err);
      });
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }

    function toggleSidebar(e) {
      vm.isSidebarOpen = !vm.isSidebarOpen;
    }
  }
})();
//todo Make own modal like Angular UI bootstrap modal with resolve part
//Service, Controller, Template

//todo Make directive with click outside handling
