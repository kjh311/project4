angular.module('beershowService', [])

.factory('Beershow', function($http) {

  var beershowFactory = {};
  var key = "89b802471ef2d78f3003d97f713ac4c0";

  beershowFactory.get = function(id) {
    return $http.get('/api/brewery/' + id + '/beers');
  };

  beershowFactory.create = function(breweryData) {
    return $http.post('http://api.brewerydb.com/v2/brewery' + '?key=' + key);
  };

  beershowFactory.update = function(id, breweryData) {
    return $http.put('http://api.brewerydb.com/v2/brewery/:breweryId' + '?key=' + key);
  };

  beershowFactory.delete = function(id) {
    return $http.delete('http://api.brewerydb.com/v2/brewery/:breweryId' + '?key=' + key);
  };

  return beershowFactory;

});
