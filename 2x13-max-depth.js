// 30-09-2023

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
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function (root) {
  var scanNode = function (node, count) {
    if (node == null) return count;

    count += 1;
    var left = 0,
      right = 0;

    if (node.left) left = scanNode(node.left, count);
    if (node.right) right = scanNode(node.right, count);
    if (!node.left && !node.right) return count;

    return Math.max(left, right);
  };

  return scanNode(root, 0);
};

var r1 = maxDepth(new TreeNode(3, new TreeNode(9), new TreeNode(20, 15, 7)));
var r2 = maxDepth(new TreeNode(1, null, 2));
console.log(r1, r2);
