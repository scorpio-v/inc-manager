'use strict';

/**
 * @ngdoc function
 * @name incidentManagerApp.controller:IncidentcontrollerCtrl
 * @description
 * # IncidentcontrollerCtrl
 * Controller of the incidentManagerApp
 */
incidentManagerApp.controller('IncidentcontrollerCtrl', ['CreateIncidentService', '$scope', function (CreateIncidentService, scope) {
  	scope.query='';
  	scope.users = '';
  	scope.company = '';
  	console.log('scope.query : ' + scope.query);

  	scope.getAffectedUsers = function() {
  		console.log("Getting Affected Users...");
  		  CreateIncidentService.getAffectedUsers(scope.query).then(function(user){
  			  console.log('Controller : ' + user);
  			  scope.users = user;
  		});
  	};

  	scope.getAffectedCompany = function() {
  		console.log("Getting Affected Users...");
  		  CreateIncidentService.getAffectedCompany(scope.query).then(function(company){
  			  console.log('Controller : ' + company);
  			  scope.company = company;
  		});
  	};
}]);
