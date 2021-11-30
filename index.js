function hasTargetSum(array, target) {
  // Write your algorithm here:
  for(const num1 of array){ //Primary/Parent loop for 1st # for finding sum.
    for(const num2 of array){ //Nested/Child loop for 2nd # for finding sum.
      //Ensure that the num1 doesn't get added to itself.
      if((num1 + num2) === target) return true; //Compare each sum found to target Integer.
    }
    return false; //No possible sums match the target Integer.
  }
}

/* 
  The Big O time complexity of the function:
    Time Complexity: O(?)
      Steps included:
        The function itself (0 steps),
        No methods used on the Array itself (0 steps),
        Using two numbers to find a sum 
          requiring two (for of) loops (n^2 steps),
      Total Time Complexity: O().
    Function's summarized Time Complexity: O(n^2).
*/

/* 
  Pseudocode:
  Create hasTargetSum function that recieves, as arguments,
  an Array of Integers and a target Integer.
  In hasTargetSum:
    Compare the sum of two #s:
      If, any pair of #s in the array adds up to target #, return true.
      Else if, all possible sums have not been looked at, continue looking.
      Else, if all possible sums != target Integer, return false.
      */

/*
  Written explanation of solution:
  //
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
  console.log("");
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));
  console.log("");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));
  console.log("");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));
  console.log("");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("");
  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  console.log("=>", hasTargetSum([4], 5));
}

module.exports = hasTargetSum;