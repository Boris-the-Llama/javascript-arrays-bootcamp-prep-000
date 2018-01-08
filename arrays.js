var chocolateBars = ['snickers', 'hundred grand', 'kitat', 'skittles'];

function addElementToBeginningOfArray (array, atStart) {
  var array2 = [atStart, ...array];
  return array2;
}

function destructivelyAddElementToBeginningOfArray(array, atStart) {
   array.unshift(atStart);
   return array;
}

function 