angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // add data and a getLinks method
  $scope.data = {
    url: ""
  };
  $scope.getLinks = function () {
    Links.getLinks();
  };
});
