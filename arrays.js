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

function accessElementInArray(array, index) {
  return array[index];  
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift();  
}

function removeElementFromBeginningOfArray(array) {
  var array2 = array.slice(1);
  return array2;
} 

