'use strict';

/**
 * @ngdoc directive
 * @name incidentManagerApp.directive:incidentDirective
 * @description
 * # incidentDirective
 */
angular.module('incidentManagerApp')
  .directive('incidentDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the incidentDirective directive');
      }
    };
  });
