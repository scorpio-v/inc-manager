'use strict';

describe('Controller: IncidentcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('incidentManagerApp'));

  var IncidentcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IncidentcontrollerCtrl = $controller('IncidentcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(IncidentcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});