// app.js about.html
var app = angular.module('tarumaTravelApp', []);

app.controller('TarumaTravelController', function($scope) {
  $scope.team = [
    {
      name: 'Wildan',
      position: 'FOUNDER',
      image: '../images/team/wildan.jpg' // Replace with the actual path to the image
    },
    {
      name: 'Naufal',
      position: 'FOUNDER',
      image: '../images/team/naufal.jpg' // Replace with the actual path to the image
    },
    {
      name: 'Ziddan',
      position: 'GENERAL MANAGER',
      image: '../images/team/jiduns.jpg' // Replace with the actual path to the image
    }
  ];
});
