angular.module('app.about', [])

.config(function($stateProvider) {
  $stateProvider
  .state('tab.about', {
    url: '/about',
    views: {
      'about-tab': {
        templateUrl: 'app/about/about.html'
      }
    }
  });
});