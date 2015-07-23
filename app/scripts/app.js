'use strict';

/**
 * @ngdoc overview
 * @name incidentManagerApp
 * @description
 * # incidentManagerApp
 *
 * Main module of the application.
 */
angular
  .module('incidentManagerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/incident', {
        templateUrl: 'views/incident.html',
        controller: 'IncidentcontrollerCtrl',
        controllerAs: 'incidentcontroller'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
