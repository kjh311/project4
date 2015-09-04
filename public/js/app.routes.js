angular.module('routerRoutes', ['ngRoute'])

  .config(function($routeProvider, $locationProvider) {
    $routeProvider

    .when('/', {
      templateUrl  : 'views/pages/home.html',
      controller   : 'homeController',
      controllerAs : 'home'
  })

      .when('/styles', {
      templateUrl  : 'views/pages/styles.html',
      controller   : 'stylesController',
      controllerAs : 'vm'
  })

    .when('/breweries', {
      templateUrl  : 'views/pages/breweries.html',
      controller   : 'breweriesController',
      controllerAs : 'vm'
  })

     .when('/breweriesshow/:id', {
      templateUrl  : 'views/pages/breweriesshow.html',
      controller   : 'breweryController',
      controllerAs : 'vm'
  })

    .when('/beerspeak', {
      templateUrl  : 'views/pages/beerspeak.html',
      controller   : 'beerspeakController',
      controllerAs : 'vm'
  });

  // $locationProvider.html5Mode(true);

})
