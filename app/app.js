
angular.module('app', ['ui.router'])

  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/profile');

    $stateProvider
      .state('profile', {
        url: '/profile',
        templateUrl: 'profile/profile.html',
        controller: 'ProfileCtrl'
      })
      .state('fun', {
        url: '/fun',
        templateUrl: 'fun/fun.html'
      })
      .state('fun.movie', {
        url: '/movie',
        template: '<h3>Кино</h3>'
      })
      .state('fun.domino', {
        url: '/domino',
        template: '<h3>Домино</h3>'
      })

/*
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: true
    });
*/
  }])

  .controller('AppCtrl', [function () {

  }])