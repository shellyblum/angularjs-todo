angular.module("app", [])
.controller("mainCtrl", function($scope) {
  $scope.done = false;
  $scope.items = [];
      $scope.items.push('Walk the dog');
  $scope.add = function() {
          if($scope.task) {
              $scope.items.push($scope.task);
              $scope.sum();
          }
    $scope.task = '';
  }
  $scope.delete = function(index,$event) {
          $event.stopPropagation();
    if (confirm('You are about to delete this item!') == false) {
      return;
    } else {
              $scope.items.splice(index, 1);
              $scope.sum();
          }
  }
  $scope.mark = function(index) {
          let lis = $element(document.querySelectorAll('li'));
          lis[index].addClass('marked');
  }
      $scope.sum = function() {
          return $scope.items.length;
      }
})
