'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MapCtrl', ['$scope', function($scope) {
    $scope.rooms = [
      {'name': '*69', 'class': 'star69', 'dir': 'bottom'},
      {'name': 'ABC', 'class': 'abc closed', 'dir': 'top closed'},
      {'name': 'Ballpoint', 'class': 'ballpoint', 'dir': 'bottom'},
      {'name': 'Call Waiting', 'class': 'call-waiting closed', 'dir': 'bottom closed'},
      {'name': 'Dial Tone', 'class': 'dial-tone', 'dir': 'top'},
      {'name': 'emoji', 'class': 'emoji', 'dir': 'bottom'},
      {'name': 'Hieroglyph', 'class': 'hieroglyph', 'dir': 'left'},
      {'name': 'Hypertext', 'class': 'hypertext', 'dir': 'top'},
      {'name': 'Morse Code', 'class': 'morse-code', 'dir': 'bottom'},
      {'name': 'Phone Home', 'class': 'phone-home closed', 'dir': 'right closed'},
      {'name': 'Pony Express', 'class': 'pony-express', 'dir': 'bottom'},
      {'name': 'Ring of Fyre', 'class': 'ring-of-fyre', 'dir': 'none'},
      {'name': 'Rosetta Stone', 'class': 'rosetta-stone', 'dir': 'left'},
      {'name': 'Smoke Signal', 'class': 'smoke-signal', 'dir': 'top'},
      {'name': 'Sputnik', 'class': 'sputnik', 'dir': 'top'},
      {'name': 'Wall Street', 'class': 'wall-street closed', 'dir': 'bottom closed'},
     ];
  }]);
