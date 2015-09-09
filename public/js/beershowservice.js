angular.module('beershowService', [])

.factory('Beershow', function($http) {

  var beershowFactory = {};


  beershowFactory.get = function(id) {
    return $http.get('/api/brewery/' + id + '/beers');
  };

  beershowFactory.create = function(breweryData) {
    return $http.post('http://api.brewerydb.com/v2/brewery' + '?key=' + beerKey);
  };

  beershowFactory.update = function(id, breweryData) {
    return $http.put('http://api.brewerydb.com/v2/brewery/:breweryId' + '?key=' + beerKey);
  };

  beershowFactory.delete = function(id) {
    return $http.delete('http://api.brewerydb.com/v2/brewery/:breweryId' + '?key=' + beerKey);
  };

  return beershowFactory;

});
