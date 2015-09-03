angular.module('routerApp', ['routerRoutes', 'ngAnimate'])

.controller('mainController', function() {

  var vm = this;

  vm.bigMessage = 'A smooth sea never made a skilled sailor.';

      vm.breweries = [
  { name: 'Golden Road Brewery', rating: '', city: 'Los Angeles'},
  { name: 'Angel City Brewery', rating: '', city: 'Los Angeles'},
  { name: 'NewHall Refinery', rating: '', city: 'Santa Clarita'},
  { name: 'Bonabenture Brewing Co', rating: '', city: 'Los Angeles'},
  { name: 'Mumford Brewing', rating: '', city: 'Los Angeles'},
  { name: 'Ohana Brewing Co', rating: '', city: 'Los Angeles'},
  { name: 'The Dudes Brewing Co', rating: '', city: 'Torrance'},
  { name: 'L.A. Aleworks', rating: '', city: 'Los Angeles'},
  { name: 'San Pedro Brewing Company', rating: '', city: 'San Pedro'},
  { name: 'Smog City Brewing Company', rating: '', city: 'Torrance'},
  { name: 'Eagle Rock Brewery', rating: '', city: 'Los Angeles'},
  { name: 'Craftsman Brewing Company', rating: '', city: 'Pasadena'},
  // { name: 'Dale Bros', rating: '', city: 'Upland'},
  // { name: 'Belmont Brewing Company', rating: '', city: 'Long Beach'},
  // { name: 'Ladyface Ale Company', rating: '', city: 'Agoura Hills'},
  // { name: 'El Segundo Brewing Company', rating: '', city: 'El Segundo'},
  // { name: 'Monkish Brewing Company', rating: '', city: 'Torrance'},
  // { name: 'Claremont Craft Ales', rating: '', city: 'Claremont'},
  // { name: 'Beachwood Brewing', rating: '', city: 'Long Beach'},
  // { name: 'Highland Park Brewery', rating: '', city: 'Los Angeles'},
  // { name: 'Three Weavers Brewery', rating: '', city: 'Inglewood'},
  // { name: 'Macleod Ale Brewing Co', rating: '', city: 'Van Nuys'},


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

.controller('beerspeakController', function(Beer){

  var vm = this;
  // vm.message = 'This is the Beer Speak Page';
  Beer.all()

    .success(function(data) {

      vm.beer = data;
    });



});


