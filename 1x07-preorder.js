/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

function Node(val, children) {
  this.val = val;
  this.children = children;
}

const preorder = (root) => {
  // let result = new Array(10 ** 4);
  // let items = 0;

  let result = [];
  for (let i = 0; i < root.children.length; i++) {
    let current = root.children[i];
    let next = root.children[i + 1];
  }
};

console.log(
  preorder(new Node(1, [new Node(3, [new Node(5), new Node(6)])], new Node(2), new Node(4)))
);
