angular.module('pokeApp', ['ui.router'])
.config(function($urlRouterProvider, $stateProvider){

  $stateProvider
  .state('home', {
    url:'/',
    controller:'notHere',
    templateUrl: './routes/home.html'
  })
  .state('contact', {
    url:'/contact',
    // controller:'mainCtrl',
    templateUrl: './routes/contact.html'
  })
  .state('accomp', {
    url:'/accomp',
    // controller:'mainCtrl',
    templateUrl: './routes/accomp.html'
  })
  .state('about', {
    url:'/about',
    // controller:'mainCtrl',
    templateUrl: './routes/about.html'
  });

  $urlRouterProvider
   .otherwise('/');
 })
