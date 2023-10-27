/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  var leaves1 = [];
  var leaves2 = [];

  var traverse = function (root, leaves) {
    if (root.left === null && root.right === null) {
      leaves.push(root.val);
    }

    if (root.left !== null) {
      traverse(root.left, leaves);
    }

    if (root.right !== null) {
      traverse(root.right, leaves);
    }
  };

  traverse(root1, leaves1);
  traverse(root2, leaves2);

  return leaves1.length == leaves2.length && leaves1.every((val, i) => leaves2[i] === val);
};

var r1 = new TreeNode(1, new TreeNode(2), new TreeNode(2));
var r2 = new TreeNode(1, new TreeNode(3), new TreeNode(2));
console.log(leafSimilar(r1, r2));
