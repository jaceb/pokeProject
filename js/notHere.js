angular.module('pokeApp').controller('notHere', function($scope){
$scope.imgNum = "styles/trainerPics/trainer2.png";
function getRandom() {

return Math.floor((Math.random() * 3) + 1)

}
$scope.notHere = function(){
switch (getRandom()) {

  case 1: $scope.imgNum = "styles/trainerPics/bike.png";
  break;
  case 2:  $scope.imgNum = "styles/trainerPics/surf.png";
  break;
  case 3:  $scope.imgNum = "styles/trainerPics/fishing.png";
  break;
  default: $scope.imgNum = "styles/trainerPics/trainer2.png";

}
}

})
