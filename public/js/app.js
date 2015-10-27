angular.module('routerApp', ['routerRoutes', 'ngAnimate', 'breweryService', 'styleService', 'beershowService'])

.config(['$httpProvider', function($httpProvider) {
      $httpProvider.defaults.useXDomain = true;
      $httpProvider.defaults.headers.common = 'Content-Type: application/json';
      // $httpProvider.defaults.headers.common = ['Access-Control-Allow-Origin'];
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
      delete $httpProvider.defaults.headers.common['Origin'];
   }
])

.controller('mainController', ['$http', '$location', function($http, $location) {

  var vm = this;


vm.message = "main controller";

// Los Angeles Breweries
      vm.breweries = [
  { name: 'Golden Road Brewery', rating: '', city: 'Los Angeles', link: '6RZC0v', twitter: '639862176551845889'},
  { name: 'Angel City Brewery', rating: '', city: 'Los Angeles', link: '0ZIlVA', twitter: '640951744621490177'},
  { name: 'Mumford Brewing', rating: '', city: 'Los Angeles', link: 'pUVZvr', twitter: '642139646843994112'},
  { name: 'Ohana Brewing Co', rating: '', city: 'Los Angeles', link: 'nE0YCy', twitter: '642139836262957056'},
  { name: 'The Dudes Brewing Co', rating: '', city: 'Torrance', link: 'xXJuyA', twitter: '642140103335260161'},
  { name: 'Eagle Rock Brewery', rating: '', city: 'Los Angeles', link: 'aCW7DF', twitter: '642140292196405248'},
  { name: 'Bonaventure Brewing Co.', rating: '', city: 'Los Angeles', link: 'hiPKpK', twitter: '642140478125686784'},
  { name: 'Strand Brewing Co', rating: '', city: 'Los Angeles', link: 'BbSlls', twitter: '642140649978880000'},
  { name: 'El Segundo Brewing Company', rating: '', city: 'El Segundo', link: 'TiJjtj', twitter: '642140878765625344'},
  { name: 'Karl Strauss Brewing Company', rating: '', city: 'Los Angeles', link: 'mtUjck', twitter: '642141055773642753'},
  { name: 'BJs Restaurant and Brewery', rating: '', city: 'Los Angeles', link: 'CJ7aEv', twitter: '642141371868905473'},
  { name: 'Beachwood BBQ & Brewing', rating: '', city: 'Long Beach', link: 'RCXyVC', twitter: '642141546372947968'},
  { name: 'Monkish Brewing Co.', rating: '', city: 'Torrance', link: 'PIwPRT', twitter: '642141807007043585'},
  { name: 'San Pedro Brewing Company', rating: '', city: 'San Pedro', link: 'YBW4h3', twitter: '642141976742105089'},
  { name: 'Three Weavers Brewing Company', rating: '', city: 'Inglewood', link: 'mpfjHg', twitter: '642142160062582784'},
  { name: 'Belmont Brewing Co', rating: '', city: 'Long Beach', link: 'MQVQup', twitter: '642142297275043840'},
  { name: 'Gordon Biersch Brewing', rating: '', city: 'Los Angeles', link: 'P2xdU4', twitter: '642142539420569600'},
  { name: 'Pacific Plate Brewing Co', rating: '', city: 'Pasadena', link: 'g4IkyI', twitter: '642142701081591809'},
  { name: 'Highland Park Brewery', rating: '', city: 'Pasadena', link: 'q8pAoY', twitter: '642142944896552960'},

];

//search
vm.doSearch = function(){
  $http.get('api/search?key=' + beerKey + '&q=' + vm.query).then(function(res){
    console.log(res.data);
    vm.breweries = res;
    $location.path('/searchresults');
  });
}


}])

.controller('homeController', function(){

  var vm = this;
  vm.message = 'This is the home page!';
})



.controller('stylesController', ['Style', '$routeParams', function(Style, $routeParams){
  var vm = this;
  vm.message = 'Styles controller is connected!!';



  Style.get($routeParams.id).then(function(res) {
    console.log(res)
    vm.styles = res;
  });
}])


.controller('styleController', ['Style', '$routeParams', function(Style, $routeParams){
  var vm = this;
  vm.message = 'Style controller works';

  Style.get($routeParams.id).then(function(res) {
    console.log(res);
    vm.style = res.data;
  });
}])

.controller('beershowController', ['Beershow', '$routeParams', function(Beershow, $routeParams){
  var vm = this;
  vm.message = 'Brewery-beer-show controller works';
document.getElementById('spinnerBreweryBeerShow').style.visibility = "visible";
  Beershow.get($routeParams.id).then(function(res) {
    console.log(res)
    document.getElementById('spinnerBreweryBeerShow').style.display = "none";
    vm.beershow = res.data;
  });
}])



.controller('breweriesController', function(){

  var vm = this;
  vm.message = 'Breweries controller works';
})


.controller('breweryController', ['Brewery', '$routeParams', function(Brewery, $routeParams){
  var vm = this;
  vm.message = 'Brewery controller works';

  Brewery.get($routeParams.id).then(function(res) {
    console.log(res)
    vm.brewery = res.data;
  });
}])

.controller('NewBreweryController', ['Brewery', function(Brewery) {
  var vm = this;

  vm.name        = "";
  vm.description = "";
  vm.website     = "";
  vm.established = "";

  vm.createBrewery = createBrewery;

  function createBrewery() {
    Brewery.create({
             name:        vm.name,
             description: vm.description,
             website:     vm.website,
             established: vm.established
           })
           .then(
             function(res) {
               alert(res.data.message);
             },
             function(err) {
               alert(err);
           });
  }

}])

.controller('searchController', function($http){

  var vm = this;

  vm.test = function(){
    console.log('working');
  }

  vm.doSearch = function(){
    document.getElementById('spinnerSearch').style.visibility = "visible";
    $http.get('api/search?key=' + beerKey + '&q=' + vm.query).then(function(res){
      console.log(res.data);
      document.getElementById('spinnerSearch').style.display = "none";
      vm.results = res.data;
    });
  }
})


.controller('beerspeakController', function(Beer){

  var vm = this;
  Beer.all()

    .success(function(data) {

      vm.beer = data;
    });
});





