// We will pass you a function as an argument
// You need to call this function and return the result
function fnAsArguments(callback) {
  return callback();
}

// We will pass you a value as an argument
// You need to return a function that will return the same value when called
function fnAsReturnValue(value) {
    return function() {
      return value;
    }
}

// Write a non-destructive version of `push()`
// You need to return an array with the value added in a non-destructive way
function push(array, addValue) {
    var newArray = [...array, addValue];
    return newArray;
}


module.exports = {
  fnAsArguments,
  fnAsReturnValue,
  push
}
