/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr, arr2 = []) {
  if (arr.length === 0) {
    return arr2;
  }
  if (typeof arr[0] == 'number') {
    arr2.push(arr[0])
  } else {
      arr[0].forEach(element => {
        arr.push(element);
      });
  }
  return flatten(arr.slice(1), arr2)
}



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
