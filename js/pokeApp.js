angular.module('pokeApp', ['ui.router']).
config(function($stateProvider, $urlRouterProvider,$httpProvider){

  $stateProvider
  .state('home', {
    url:'/',
    controller:'homeCtrl',
    templateUrl: '/routes/home.html'


  })

  $stateProvider
  .state('contact', {
    url:'/contact',
    controller:'contactCtrl',
    templateUrl: '/routes/contact.html'


  })

  $stateProvider
  .state('accomp', {
    url:'/accomp',
    controller:'accompCtrl',
    templateUrl: '/routes/accomp.html'


  })

  $stateProvider
  .state('about', {
    url:'/about',
    controller:'aboutCtrl',
    templateUrl: '/routes/about.html'


  })

})
