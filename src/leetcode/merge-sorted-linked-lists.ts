// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.
//
// Example 1:
// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]
//
// Example 2:
// Input: l1 = [], l2 = []
// Output: []
//
// Example 3:
// Input: l1 = [], l2 = [0]
// Output: [0]

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const mergeTwoLinkedLists = (l1: ListNode | null, l2: ListNode | null) => {
  const res = new ListNode();
  let temp = res;

  while (l1 && l2) {
    if (l1.val > l2.val) {
      temp.next = l2;
      l2 = l2.next;
    } else {
      temp.next = l1;
      l1 = l1.next;
    }

    temp = temp.next;
  }

  if (l1 !== null) {
    temp.next = l1;
  }

  if (l2 !== null) {
    temp.next = l2;
  }

  return res.next;
};
