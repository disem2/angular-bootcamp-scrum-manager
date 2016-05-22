(function() {
  'use strict';

  angular
    .module('signupModal', [])
    .service('bcSignupModalService', SignupModal);

  /** @ngInject */
  function SignupModal($http, $compile, $rootScope, $document, $q, $injector, $templateRequest, $controller) {
    var modalOptions = {};
    var templateUrl = '';

    this.open = showModal;

    this.getModalOptions = function () {
      return modalOptions;
    };
    function showModal(options) {
      var deferred = $q.defer();
      var resolves = options.resolve || {};
      var parentScope = options.scope || $rootScope;

      var promises = _.mapValues(resolves, function (resolveFunc) {
        return $injector.invoke(resolveFunc);
      });


      var resolvedInstances = null;

      $q.all(promises)
        .then(function (_resolvedInstances) {
          resolvedInstances = _resolvedInstances;

          return $q.when(
            options.template || $templateRequest(options.templateUrl)
          );
        })
        .then(function (template) {
          var scope = parentScope.$new();

          $controller(options.controller, _.assign(
            { $scope: scope },
            resolvedInstances
          ));

          scope.close = function (result) {
            deferred.resolve(result);
            element.remove();
            scope.$destroy();
          };

          var compiledTemplateLinker = $compile(template);
          var element = compiledTemplateLinker(scope);

          angular.element($document[0].body).append(element);
        })
        .catch(function (err) {
          deferred.reject(err);
        });

      return deferred.promise;
    }
  }

})();
