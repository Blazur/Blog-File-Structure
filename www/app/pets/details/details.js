angular.module('app.pets.details', [])

.config(function($stateProvider) {
  $stateProvider
  .state('tab.pet-detail', {
    url: '/pet/:petId',
    views: {
      'pets-tab': {
        templateUrl: 'app/pets/details/details.html',
        controller: 'PetDetailCtrl'
      }
    }
  });
})

.controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
  $scope.pet = PetService.get($stateParams.petId);
});