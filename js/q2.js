'use strict';

printStar(3);



function printStar(numperOfStar) {
  var starArr = '';
  for (var i = 0; i < numperOfStar; i++) {
    starArr = '*' + starArr;
    console.log(starArr);
  }
}
