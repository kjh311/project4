angular.module('myApp', ['duScroll'])
  .value('duScrollDuration', 2000)
  .value('duScrollOffset', 30)
  .controller('myCtrl', function($scope, $document) {
    $document.scrollTopAnimated(400).then(function() {
      console && console.log('You just scrolled to the top!');
    });

    var someElement = angular.element(document.getElementById('some-id'));
    $document.scrollToElementAnimated(someElement);
  }
);
