// 27-10-2023
// https://leetcode.com/problems/search-in-a-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// Linear appoarch searching through every node regardless of their position relatively to the search value.
var searchBSTSlow = function (root, val) {
  var traverse = function (node) {
    if (node.val == val) return node;

    var found = null;
    if (node.left) found = traverse(node.left, node);
    if (!found && node.right) found = traverse(node.right, node);

    return found;
  };

  var subtree = traverse(root, null);
  return subtree;
};

// Normal (efficient) solution.
var searchBST = function (root, val) {
  var traverse = function (node) {
    if (node.val == val) return node;

    if (val < node.val && node.left) return traverse(node.left);
    if (val > node.val && node.right) return traverse(node.right);

    return null;
  };

  var subtree = traverse(root, null);
  return subtree;
};

console.log(
  searchBST(new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7)), 2)
);
console.log(
  searchBST(new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7)), 5)
);
