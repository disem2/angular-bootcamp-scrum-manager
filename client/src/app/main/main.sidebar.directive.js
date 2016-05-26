(function() {
  'use strict';

  angular
    .module('bootcamp')
    .directive('dcSidebar', ['$log', dcSidebar]);

  /** @ngInject */
  function dcSidebar($log) {
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
      $log.log(scope);
      $log.log(el);
      $log.log(attr);
    }

    /** @ngInject */
    function SidebarController() {

      activate();

      function activate() {

      }
    }
  }
})();
