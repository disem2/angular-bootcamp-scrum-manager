(function() {
  'use strict';

  angular
    .module('bcModal', [])
    .service('bcModalService', SignupModal);

  /** @ngInject */
  function SignupModal($compile, $rootScope, $document, $q, $injector, $templateRequest, $controller) {
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

      templateUrl = options.templateUrl;

      var promises = _.mapValues(resolves, function (resolveFunc) {
        return $injector.invoke(resolveFunc);
      });


      var resolvedInstances = null;
      var modalTitle = 'Modal Title';

      //Promise for resolves
      $q.all(promises)
        .then(function (_resolvedInstances) {
          var modalPromise = $templateRequest('app/components/modal/modal.html');
          var templatePromise = options.template ||  $templateRequest(templateUrl);
          modalTitle = options.title || modalTitle;

          resolvedInstances = _resolvedInstances;

          return $q.all([modalPromise, templatePromise]);
        })
        .then(function (templates) {
          var scope = parentScope.$new();
          scope.title = modalTitle;

          //Adding controller
          $controller(options.controller, _.assign(
            { $scope: scope },
            resolvedInstances
          ));

          scope.close = function (result) {
            deferred.resolve(result);
            modal.remove();
            scope.$destroy();
          };

          //Compiling templates and adding modal to body
          var compiledModalLinker = $compile(templates[0]);
          var compiledBodyLinker = $compile(templates[1]);
          var modal = compiledModalLinker(scope);
          var body = compiledBodyLinker(scope);

          modal.find('.modal-body').append(body);

          angular.element($document[0].body).append(modal);
        })
        .catch(function (err) {
          deferred.reject(err);
        });

      return deferred.promise;
    }
  }

})();
