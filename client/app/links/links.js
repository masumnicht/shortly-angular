angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // add data and a getLinks method
  $scope.data = {
    links: []
  };
  // $scope.links = [];

  $scope.getLinks = function () {
    Links.getLinks().then(function (data) {
      $scope.data.links.push(data);
    });
    console.log($scope.data.links);
  };
});
