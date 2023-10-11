/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// NOTE: horrible results, I must write more efficient implementation
const detectCycle = (head) => {
  let used = [];
  while (!used.includes(head)) {
    used.push(head);
    head = head.next;
  }

  // head = initial;
  // let count2 = 0;
  // while (head != tail.next || count2 != count) {
  //   count2++;
  //   head = head.next;
  // }

  return head;
};

let cycled = new ListNode(2);
let head = new ListNode(1, cycled);
cycled.next = new ListNode(3, new ListNode(4, cycled));

console.log(detectCycle(head).val);
