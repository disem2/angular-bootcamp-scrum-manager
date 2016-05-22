(function() {
  'use strict';

  angular
    .module('bootcamp')
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

    function linkFunc(scope, el, attr) {

    }

    /** @ngInject */
    function SidebarController() {

      activate();

      function activate() {

      }
    }
  }
})();
