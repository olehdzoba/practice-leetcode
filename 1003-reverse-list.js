/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// NOTE: can be optimzed, again I was too lazy to do that
const reverseList = (list) => {
  let head = list;
  let reversed = [];
  while (head) {
    reversed.push(head.val);
    head = head.next;
  }

  reversed.reverse();

  let tail = new ListNode(reversed[0]);
  let result = tail;
  for (let i = 1; i < reversed.length; i++) {
    tail.next = new ListNode(reversed[i]);
    tail = tail.next;
  }

  return result;
};

let curr = reverseList(
  new ListNode(1, new ListNode(2, new ListNode(3), new ListNode(4, new ListNode(5))))
);
while (curr) {
  console.log(curr.val);
  curr = curr.next;
}
