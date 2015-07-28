'use strict';

/**
 * @ngdoc service
 * @name incidentManagerApp.incidentService
 * @description
 * # incidentService
 * Service in the incidentManagerApp.
 */
incidentManagerApp.factory('CreateIncidentService', ['$http', function ($http) {
  console.log('CreateIncidentService');
  var svc = {
    getAffectedUsers: getAffectedUsers,
    getAffectedCompany: getAffectedCompany
  };
  return svc;

  function getAffectedUsers(query) {
	  console.log('getAffectedUsers: ' + query);

		var user = $http({method:'GET', url:searchURL}).
		  success(function(data, status, headers, config) {
			  console.log(data);
				  return data;
      }).
		  error(function(data, status, headers, config) {
			  return "ERROR";
      });
    return user;
  };

  function getAffectedCompany(query) {
	  console.log('getAffectedCompany: ' + query);

		var company = $http({method:'GET', url:searchURL}).
		  success(function(data, status, headers, config) {
			  console.log(data);
				  return data;
      }).
		  error(function(data, status, headers, config) {
			  return "ERROR";
      });
    return company;
  };
}]);
