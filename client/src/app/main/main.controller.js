(function() {
  'use strict';

  angular
    .module('bootcamp.main', [])
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, bcModalService, $log, $scope) {
    var vm = this;

    vm.isSidebarOpen = false;

    vm.openSignUp = showSignupModal;
    vm.showSidebar = showSidebar;

    activate();

    function activate() {

    }

    function showSignupModal() {

      bcModalService.open({
        templateUrl: 'app/components/signup/signup.html',
        controller: 'SignupController as signup',
        scope: $scope,
        title: 'Register new user',
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

    function showSidebar() {
      vm.isSidebarOpen = true;
    }
  }
})();
