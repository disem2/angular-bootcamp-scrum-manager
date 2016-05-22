(function() {
  'use strict';

  angular
    .module('bcClickOutside', [])
    .directive('bcClickOutside', bcClickOutside);

  /** @ngInject */
  function bcClickOutside($parse, $document) {
    var directive = {
      restrict: 'A',
      link: link
    };

    return directive;

    function link(scope, elem, attrs) {
      var parsedExpresion = $parse(attrs.bcClickOutside);

      $document[0].addEventListener('click', function (e) {
        var target = e.target;

        do {
          if(target === elem[0]) return;
        } while (target = target.parentNode );

        if(target !== elem[0]) {
          parsedExpresion(scope);
          scope.$apply();
        }
      }, true);
    }
  }

})();
