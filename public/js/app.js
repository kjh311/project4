angular.module('routerApp', ['routerRoutes', 'ngAnimate', 'breweryService'])

.config(['$httpProvider', function($httpProvider) {
      $httpProvider.defaults.useXDomain = true;
      $httpProvider.defaults.headers.common = 'Content-Type: application/json';
      // $httpProvider.defaults.headers.common = ['Access-Control-Allow-Origin'];
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
      delete $httpProvider.defaults.headers.common['Origin'];
   }
])

.controller('mainController', function() {

  var vm = this;


      vm.breweries = [
  { name: 'Golden Road Brewery', rating: '', city: 'Los Angeles'},
  { name: 'Angel City Brewery', rating: '', city: 'Los Angeles'},
  { name: 'NewHall Refinery', rating: '', city: 'Santa Clarita'},
  { name: 'Bonabenture Brewing Co', rating: '', city: 'Los Angeles'},
  { name: 'Mumford Brewing', rating: '', city: 'Los Angeles'},
  { name: 'Ohana Brewing Co', rating: '', city: 'Los Angeles'},
  { name: 'The Dudes Brewing Co', rating: '', city: 'Torrance'}

];

 vm.styles = [
    { style: 'American IPA', rating: ''}
  ];

})

.controller('homeController', function(){

  var vm = this;
  vm.message = 'This is the home page!';
})

.controller('stylesController', function(){

  var vm = this;

})



.controller('breweriesController', function(){

  var vm = this;
  vm.message = 'This is the breweries page';
})

.controller('breweryController', ['Brewery', '$routeParams', function(Brewery, $routeParams){
  var vm = this;
  // vm.message = 'Test message';

  Brewery.get($routeParams.id).then(function(res) {
    console.log(res)
    vm.brewery = res.data;
  });

}])

.controller('beerspeakController', function(Beer){

  var vm = this;
  // vm.message = 'This is the Beer Speak Page';
  Beer.all()

    .success(function(data) {

      vm.beer = data;
    });



});





