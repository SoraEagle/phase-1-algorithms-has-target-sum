function hasTargetSum(array, target){
  // Write algorithm here:
  for(let num1 = 0; num1 < array.length; num1++){ //Primary/Parent loop for 1st # for finding sum.
    for(let num2 = num1 + 1; num2 < array.length; num2++){ //Nested/Child loop for 2nd # for finding sum.
      //Ensure that num1 doesn't get added to itself.
      if((array[num1] + array[num2]) === target) return true; //Compare each sum found to target Integer.
    } //No possible sums match the target Integer.
  }
  return false;
}

/* 
  The Big O time complexity of the function:
    Time Complexity: O(n^2).*/
/* 
  Pseudocode:
  Create hasTargetSum function that recieves, as arguments,
  an Array of Integers and a target Integer.
  In hasTargetSum:
    Compare the sum of two #s:
      If, any pair of #s in the array adds up to target #, return true.
      Else, if all possible sums != target Integer, return false.*/
/*
  Written explanation of solution:
  This is the most optimized that I could make the solution for this function for now.  As it is 
  using two for loops, one of which is nested, the Time Complexity,in Big O notation, is O(n^2).  
  This is the summarized notation for the Time Complexity, but in depth, since the array is being 
  referenced in each for loop (total of two loops),and one is nested in the other, normally it 
  would be just O(n^2), but with only the first loop iterating fully through the array, and with 
  each new iteration becoming smaller, it is simply estimated to be O(n^2).*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add custom tests in here
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