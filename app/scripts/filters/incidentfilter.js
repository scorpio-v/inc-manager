'use strict';

/**
 * @ngdoc filter
 * @name incidentManagerApp.filter:incidentFilter
 * @function
 * @description
 * # incidentFilter
 * Filter in the incidentManagerApp.
 */
angular.module('incidentManagerApp')
  .filter('incidentFilter', function () {
    return function (input) {
      return 'incidentFilter filter: ' + input;
    };
  });
