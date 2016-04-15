angular.module('pokeApp', ['ui.router'])
.config(function($urlRouterProvider, $stateProvider){
  $stateProvider
  .state('home', {
    url:'/',
    controller:'mainCtrl',
    templateUrl: './routes/home.html'
  })
  .state('contact', {
    url:'/contact',
    controller:'contactCtrl',
    templateUrl: './routes/contact.html'
  })
  .state('accomp', {
    url:'/accomp',
    controller:'accompCtrl',
    templateUrl: './routes/accomp.html'
  })
  .state('about', {
    url:'/about',
    controller:'aboutCtrl',
    templateUrl: './routes/about.html'
  });

  $urlRouterProvider
   .otherwise('/');
 })
