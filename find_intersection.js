// Find Intersection
// Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.

// pseudocode:
// iterate over the strArr, and
  // add each element to a new array
  // while skipping repetitious ones
  // if is in array, don't
  // return new array

function FindIntersection(strArr) {

      let intersectionArray = []

      let arrayOne = strArr[0].split(", ");
      let arrayTwo = strArr[1].split(", ");

      arrayOne.forEach(number => {
        if (arrayTwo.includes(number)) {
          intersectionArray.push(number);
        }
      });

      if (intersectionArray.length === 0) {
        return "false"
      }

      return intersectionArray.join(",")
  }
