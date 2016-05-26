(function() {
  'use strict';

  angular
    .module('bcClock', [])
    .component('bcClock', {
      bindings: {

      },
      controller: bcClockController,
      template: [
        '<div class="BcClock">',
        '<div class="BcClock_name">{{ $ctrl.name }}</div>',
        '<div class="BcClock_time">{{ $ctrl.time | date:\'HH:mm:ss\' }}</div>',
        '</div>'
      ].join('')
    });

  /** @ngInject */
  function bcClockController($interval) {
    var $ctrl = this;

    $ctrl.name = $ctrl.name || 'BC Clock';
    $ctrl.time = new Date();

    $ctrl.$onInit = $onInit;
    $ctrl.$onDestroy = $onDestroy;


    var $intervalPromise = $interval(function () {
      $ctrl.time = new Date();
    }, 1000);

    function $onInit() {

    }
    function $onDestroy() {
      $interval.cancel($intervalPromise);
    }
  }

})();
