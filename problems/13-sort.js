/***********************************************************************
Write a recursive function called `sort` that takes an array of integers, `nums`
and returns an array containing those integers sorted from least to greatest.

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` array to the end of `sorted`.

There are many ways to accomplish this task but here's a simple algorithm:

1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`

Examples:

sort([4,1,6,3,1,7]); // [1, 1, 3, 4, 6, 7]
sort([0, 1, -3]); // [-3, 0, 1]
sort([]); // []
***********************************************************************/

function sort(nums, sorted = []) {
    if (nums.length === 0) {
        return sorted;
    }

    let smallest = nums.reduce((acc, element) => {
        if (acc <= element) {
            return acc;
        } else {
            return element;
        }
    })

    sorted.push(smallest);
    let index = nums.indexOf(smallest);
    nums.splice(index, 1);

    return sort(nums, sorted);

}




// function isSorted(arr) {
//     // Your code here
//     //base case:
//     if (arr.length <= 1) {
//       return true;
//     }
//     //recursive step: compare last 2 while removing last element off arr
//     else {
//       lastEl = arr[arr.length - 1];
//       arr.pop()
//       //compare lastEl to new lastEl after using pop on arr to compare last 2 numbers of arr
//       //return isSorted on new popped arr if they are sorted
//       if (lastEl >= arr[arr.length - 1]) {
//         return isSorted(arr);
//       }
//       //return false if they aren't sorted
//       else {
//         return false;
//       }
//     }
//   }



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = sort;
