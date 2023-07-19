/**
 * Function to group an array into 'N' equally-sized sub-arrays.
 * If the size of the original array cannot be divided equally by N,
 * the final sub-array will have a length equal to the remainder.
 *
 * @param {Array} arr - The input array to be grouped.
 * @param {number} N - The number of sub-arrays to be created.
 * @returns {Array} - An array containing 'N' sub-arrays.
 * @throws {TypeError} - If the first argument is not a non-empty array or the second argument is not a positive integer.
 */
function groupArrayElements(arr, N) {
    // Ensure the first argument is a non-empty array
    if (!Array.isArray(arr) || arr.length === 0) {
      throw new TypeError("Expected first argument to be a non-empty array");
    }
  
    // Ensure the second argument is a positive integer
    if (!Number.isInteger(N) || N <= 0) {
      throw new TypeError("Expected second argument to be a positive integer");
    }
  
    // Determine the size of each sub-array
    let groupSize = Math.ceil(arr.length / N);
  
    // Initialize the array to store the result
    let result = [];
  
    // Iterate over the array, creating sub-arrays
    for (let i = 0; i < arr.length; i += groupSize) {
      let subArray = [];
  
      // Fill each sub-array with the appropriate elements
      for (let j = i; j < i + groupSize && j < arr.length; j++) {
        subArray.push(arr[j]);
      }
  
      // Add the sub-array to the result
      result.push(subArray);
    }
  
    return result;
  }
  
console.log(
groupArrayElements(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    3
  )
);
