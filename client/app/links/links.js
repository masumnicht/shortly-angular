angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // add data and a getLinks method
  $scope.data = {
    links: []
  };

  $scope.getLinks = function () {
    Links.getLinks().then(function (data) {
      $scope.data.links = data;
    });
  };
  $scope.incrementVisits = function(url) {
    console.log(url);
    Links.goToLink(url).then(function (data) {
      //MAKE IT WORK
      console.log("Worked", data);
    });
  }
});
