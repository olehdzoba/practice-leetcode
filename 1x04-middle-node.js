/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
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

// NOTE: many solution I found, the first one outperforms the others but it's hacky (using builtin array)
// the second one is the most interesting one, and the third is the most straightforward
const middleNode = (head) => {
  const list = [];

  while (head) {
    list.push(head);
    head = head.next;
  }

  return list[Math.floor(list.length / 2)];

  // let hop = 1;
  // let middle = head;

  // while (head) {
  //   head = head.next;
  //   hop++;

  //   if (head && hop % 2 == 0) {
  //     middle = middle.next;
  //   }
  // }

  // return middle;

  // let initial = head;
  // let count = 0;
  // while (head) {
  //   count++;
  //   head = head.next;
  // }

  // head = initial;
  // let middle = Math.floor(count / 2);
  // for (let i = 0; i < middle; i++) {
  //   head = head.next;
  // }

  // return head;
};

const result = middleNode(
  new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))))
  )
);

let head = result;

while (head) {
  console.log(head.val);
  head = head.next;
}
