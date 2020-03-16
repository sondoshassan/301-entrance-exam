'use strict';
var counter = 0;

var result = greaterThan([2,3,4,1,10,0,6],2);
// console.log(result);


function greaterThan(testArr,testNum) {
  for (var i = 0; i < testArr.length; i++) {
    if (testArr[i] > testNum) {
      counter++;
    }
  }
  return counter;
}
