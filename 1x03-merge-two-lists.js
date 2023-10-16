// 22-03-2023

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

const list2 = null;
const list1 = null;
// NOTE: probably can be optimized better, a lot of dummy code
const mergeTwoLists = function (list1, list2) {
  let resultHead, initialHead, list1Head, list2Head;

  if (!list1 && !list2) {
    return null;
  } else if (!list1 && list2) {
    resultHead = new ListNode(list2.val);
    list2Head = list2.next;
  } else if (!list2 && list1) {
    resultHead = new ListNode(list1.val);
    list1Head = list1.next;
  } else {
    resultHead = list1.val <= list2.val ? new ListNode(list1.val) : new ListNode(list2.val);

    list1Head = list1 && list1.val <= list2.val ? list1.next : list1;
    list2Head = list2 && list2.val < list1.val ? list2.next : list2;
  }

  initialHead = resultHead;

  while (list1Head || list2Head) {
    if (list1Head && (!list2Head || list1Head.val <= list2Head.val)) {
      resultHead.next = new ListNode(list1Head.val);
      resultHead = resultHead.next;
      list1Head = list1Head.next;
    } else if (list2Head) {
      resultHead.next = new ListNode(list2Head.val);
      resultHead = resultHead.next;
      list2Head = list2Head.next;
    }
  }

  return initialHead;
};

let curr = mergeTwoLists(list1, list2);
while (curr) {
  console.log(curr.val);
  curr = curr.next;
}
