(function() {
  'use strict';

  angular
    .module('client')
    .directive('dcSidebar', dcSidebar);

  /** @ngInject */
  function dcSidebar() {
    var directive = {
      restrict: 'E',
      scope: {
        extraValues: '='
      },
      templateUrl: 'app/main/main.sidebar.html',
      link: linkFunc,
      controller: SidebarController,
      controllerAs: 'vm'
    };

    return directive;

    function linkFunc(scope, el, attr, vm) {

    }

    /** @ngInject */
    function SidebarController() {
      var vm = this;

      activate();

      function activate() {

      }
    }
  }
})();
