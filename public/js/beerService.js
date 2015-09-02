angular.module('beerService', [])

.factory('Beer', function($http) {

  var myFactory = {};

  myFactory.all = function() {
    return $http.get('http://api.brewerydb.com/v2/brewery/0ZIlVA/beers?key=89b802471ef2d78f3003d97f713ac4c0')
  };

  return myFactory;

});
