angular.module('ng-twitter', [])
        .directive('twitter', function() {
          return {
            template: '<div><div class="ng-twt-widget-preview"><!-- twitter preview will go in this element --></div></div>',
            restrict: 'A',
            controller: 'TwitterController',
            scope: {
              widgetId: '='
            },
            link: function(scope, element, attrs) {
              scope.element = element;
            }
          };
        }).controller('TwitterController', ['$scope', function($scope) {
    window.twttr = (function(d, s, id) {
      var t, js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id))
        return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);
      return window.twttr || (t = {_e: [], ready: function(f) {
          t._e.push(f)
        }});
    }(document, "script", "twitter-wjs"));
    $scope.$watch('widgetId', function() {
      $scope.element.find('.ng-twt-widget-preview').remove();
      $scope.element.find('iframe').remove();
      $scope.element.append('<a class="twitter-timeline ng-twt-widget-preview" href="#" data-widget-id="' + $scope.widgetId + '"></a>');
      twttr.widgets.load();
    });
  }]);
