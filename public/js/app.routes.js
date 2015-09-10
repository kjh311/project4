angular.module('routerRoutes', ['ui.router'])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider

    .state('home', {
      url          : '/',
      templateUrl  : 'views/pages/home.html',
      controller   : 'mainController',
      controllerAs : 'main'
    })

    .state( 'breweries', {
      url          : '/breweries',
      templateUrl  : 'views/pages/breweries.html',
      controller   : 'breweriesController',
      controllerAs : 'vm'
  })

    .state('breweriesshow', {
      url          : '/breweriesshow/:id',
      templateUrl  : 'pages/breweriesshow.html',
      controller   : 'breweryController',
      controllerAs : 'vm'
  })

    .state('brewerybeershow', {
      url          : '/brewery/:id/beers',
      templateUrl  : 'pages/brewerybeershow.html',
      controller   : 'beershowController',
      controllerAs : 'vm'
  })

    .state('beershow', {
      url          : '/beershow',
      templateUrl  : 'pages/beershow.html',
      controller   : 'beerController',
      controllerAs : 'vm'
  })

    .state('beerspeak', {
      url          : '/beerspeak',
      templateUrl  : 'pages/beerspeak.html',
      controller   : 'beerspeakController',
      controllerAs : 'vm'
  })

    .state('newbeer', {
      url          : '/breweries/newbeer',
      templateUrl  : 'pages/newbeer.html',
      controller   : 'breweriesController',
      controllerAs : 'vm'
  })

    .state('newbrewery', {
      url          : '/breweries/newbrewery',
      templateUrl  : 'pages/newbrewery.html',
      controller   : 'breweriesController',
      controllerAs : 'vm'
  })

      .state('searchresults', {
      url          : '/searchresults',
      templateUrl  : 'views/pages/searchresults.html',
      controller   : 'searchController',
      controllerAs : 'vm'
  })

    .state('styles', {
      url          : '/styles',
      templateUrl  : 'views/pages/styles.html',
      controller   : 'stylesController',
      controllerAs : 'vm'
  })

  //   .state( 'styleid', {
  //     url          : '/style/:id',
  //     templateUrl  : 'views/pages/style.html',
  //     controller   : 'styleController',
  //     controllerAs : 'vm'
  // })

  $urlRouterProvider.otherwise('/');

  // $locationProvider.html5Mode(true);

});
