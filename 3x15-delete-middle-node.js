// 30-10-2023
// https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list

// Note: the solution is not the fastest... I accidentally found that people use two pointers approach (slow/fast pointer as they call it)
// I did not look into that approach, although I bet that this means having one pointer that would increment once the other pointer doubles
// Obviously, my solution is the most straightforward, but I spend about two hours on another challenge and I am lazy to reimplement this one.
// TLDR: CAN BE IMPROVED IF I AM NOT LAZY

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  var size = 0;
  var tail = head;
  while (tail.next) {
    size += 1;
    tail = tail.next;
  }

  tail = head;

  var center = Math.ceil(size / 2);
  if (center == 0) return null;

  var postmiddle = null;
  var premiddle = null;

  for (var i = 0; i <= center; i++) {
    if (i == center) {
      postmiddle = tail.next;
      break;
    }

    premiddle = tail;
    tail = tail.next;
  }

  premiddle.next = postmiddle;

  return head;
};

deleteMiddle(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))));
deleteMiddle(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))));
deleteMiddle(new ListNode(1, new ListNode(2)));
deleteMiddle(new ListNode(1));
