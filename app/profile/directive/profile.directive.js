app.directive('gitProfile', ['httpService', function(httpService) {
  return {
    restrict: 'E',
    templateUrl: 'app/profile/directive/user-info.html',
    scope: {
      userName: '='
    },
    controller: function($scope) {
      $scope.getUserProfile = function() {
        $scope.profileInfo = {};
        httpService.get($scope.userName).then(function(response) {
          if (response.data) {
            $scope.profileInfo = response.data;
          }
        }, function(err) {
          console.log(err);
        });
      };
    },
    link: function(scope,elem,attr) {
      console.log(scope.userName);
      scope.$watch('userName', function(newValue, oldValue) {
        if (newValue) {
          scope.getUserProfile();
        }
      });
    }
  }
}]);