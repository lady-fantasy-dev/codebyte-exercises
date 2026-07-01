// Tree Constructor

// Have the function TreeConstructor(strArr) take the array of strings stored in strArr, which will contain pairs of integers in the following format: (i1,i2), where i1 represents a child node in a tree and the second integer i2 signifies that it is the parent of i1. For example: if strArr is ["(1,2)", "(2,4)", "(7,2)"], then this forms the following tree:
// which you can see forms a proper binary tree. Your program should, in this case, return the string true because a valid binary tree can be formed. If a proper binary tree cannot be formed with the integer pairs, then return the string false. All of the integers within the tree will be unique, which means there can only be one node in the tree with the given integer value.

// Pseudocode:
// define parents = {parent: [child1, child2]}
// define children = {child: parent}
// iterate over strArray and:
// pair (1,2) => ["1", "2"] remove () and split + integer
// pair[0] is the child & pair[1] is the parent
// check if valid binary:
  // if parent exists, add the child to it
  // if parent has more than two children, false
  // if child exists in children, return false, if not, child: parent
function TreeConstructor(strArr) {
  const parents = {};
  const children = {};

  for(let i = 0; i < strArr.length; i++ ){
    let pair = strArr[i]
    .replace(/[()]/g, "")
    .split(",")
    .map(i => parseInt(i))

    let child = pair[0];
    let parent = pair[1];

    if (parents[parent]){
      parents[parent].push(child);
    } else {
      parents[parent] = [child];
    }

    if (parents[parent].length > 2){
      return false
    }

    if (children[child]){
      return false
    } else {
      children[child] = parent
    }
  }
  return true
}

// keep this function call here
console.log(TreeConstructor(readline()));
