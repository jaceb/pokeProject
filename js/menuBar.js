angular.module('pokeApp')
.directive('menuScroll', function(){
return {

  restrict: 'E',
  templateUrl: '/js/menuTmpl.html',
  controller: ['$scope', function($scope){
    $scope.dropFunc = function(){
      $(".dropDown").toggle("show");
    }


  }]
}

})
