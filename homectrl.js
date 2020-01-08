var app = angular.module("myApp", []);
app.controller('homectrl', function ($scope, $rootScope, $http) {
    $scope.count = 0;
    $scope.videoUrl = "https://www.youtube.com/watch?v=xMF-Z5gkO8M";
    $scope.filters = [];
    $scope.heading = "DEALS OF THE DAY";

    $http.get('https://api.myjson.com/bins/atgpo').then(function (response) {
        $scope.filters.push(response.data);
        console.log($scope.filters[0].purifiers[0].aquapearl.discount);
    });

    $scope.submit = function () {
        alert("Your Transaction is Successfull")
    }
    var ancohorscroll = function () {
        $(document).ready(function () {
            // Handler for .ready() called.
            $('html, body').animate({
                scrollTop: $('#scrolla1').offset().top
            }, 'slow');
        });
    }
    $scope.updatecounter = function (count) {
        $scope.count = count;
        $scope.Total = $scope.count * parseFloat(($scope.filters[0].purifiers[0].aquapearl.discount));
        console.log($scope.Total);
        ancohorscroll();

  }


});