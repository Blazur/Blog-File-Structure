angular.module('app.adopt', [])

.config(function($stateProvider) {
  $stateProvider
  .state('tab.adopt', {
    url: '/adopt',
    views: {
      'adopt-tab': {
        templateUrl: 'app/adopt/adopt.html'
      }
    }
  });
});