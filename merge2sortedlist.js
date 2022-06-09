//21. Merge Two Sorted Lists





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
var mergeTwoLists = function (list1, list2) {

  if (!list1) {
    return list2;
  } else if (!list2) {
    return list1;
  }

  let list1Ptr = list1;
  let list2Ptr = list2;
  let head = undefined;


  if (list1Ptr.val < list2Ptr.val) {
    head = list1Ptr;
    list1Ptr = list1Ptr.next;
  } else {
    head = list2Ptr;
    list2Ptr = list2Ptr.next;
  }

  let curr = head;

  while (list1Ptr !== null && list2Ptr !== null) {
    if (list1Ptr.val < list2Ptr.val) {
      curr.next = list1Ptr;
      list1Ptr = list1Ptr.next;
      // curr = curr.next;
      // curr.next = null;
    } else {
      curr.next = list2Ptr;
      list2Ptr = list2Ptr.next;
      // curr = curr.next; 
    }
    curr = curr.next;
  }


  while (list1Ptr) {
    curr.next = list1Ptr;
    list1Ptr = list1Ptr.next;
    curr = curr.next;
  }

  while (list2Ptr) {
    curr.next = list2Ptr;
    list2Ptr = list2Ptr.next;
    curr = curr.next;
  }


  return head;
};
