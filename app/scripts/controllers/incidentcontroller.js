'use strict';

/**
 * @ngdoc function
 * @name incidentManagerApp.controller:IncidentcontrollerCtrl
 * @description
 * # IncidentcontrollerCtrl
 * Controller of the incidentManagerApp
 */
var incidentForm = angular.module('incidentManagerApp')
  .controller('IncidentcontrollerCtrl', function ($scope) {
      // we will store our form data in this object
      $scope.formData = {};
  });
