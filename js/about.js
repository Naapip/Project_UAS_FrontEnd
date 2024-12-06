// app.js about.html
var app = angular.module('tarumaTravelApp', []);

app.controller('TarumaTravelController', function($scope) {
  $scope.team = [
    {
      name: 'Wildan',
      position: 'FOUNDER',
      image: '/images/team/wildan.jpg' 
    },
    {
      name: 'Naufal',
      position: 'FOUNDER',
      image: '/images/team/naufal.jpg' 
    },
    {
      name: 'Ziddan',
      position: 'GENERAL MANAGER',
      image: '/images/team/jiduns.jpg' 
    }
  ];
});
