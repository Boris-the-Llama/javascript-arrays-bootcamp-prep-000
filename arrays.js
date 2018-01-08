var chocolateBars = ['snickers', 'hundred grand', 'kitat', 'skittles'];

function addElementToBeginningOfArray(array, atStart) {
  var array2 = [atStart, ...array];
  return array2;
}

function destructivelyAddElementToBeginningOfArray(array, atStart) {
   array.unshift(atStart);
   return array;
}

function addElementToEndOfArray(array, atEnd) {
  var array2 = [...array, atEnd];
  return array2;
}

function destructivelyAddElementToEndOfArray(array, atEnd) {
  array.push(atEnd);
  return array;
}