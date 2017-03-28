// AVL tree == BST
// but BST != AVL tree
// add algorithm is the same as BST
// have to use recussion
// difference: when come back out of recursion, you have to check the rotation everytime (check if its balanced)


// right rotation steps:
// node A = {
//          value: 5,
//          left: null,
//          right: 8 (node B)
// }
// currently valid AVL tree
// .add called with 9
// node B = {
//          value: 8,
//          left: null,
//          right: 9 (node C)
// }
// (on the way up from recursion)
// check balance of node C: left height is 0, right height is 0, balanced
// check balance of node B: left height is 0, right height is 1, balanced
// check balance of node A: left height is 0, right height is 2, unbalanced, right heavy, child is right heavy

// perform right rotation
// swap the values of nodes A and B
// make node B the left child of node A
// make node C the right child of node A
// move node B's right child to it's left child
    //(in this case they're both null)
// make node A's _original_ left child 
    //(which was null in this case) the left child of node B
// update the heights of all the nodes involved




// left rotation steps:
// right rotation steps:
// node A = {
//          value: 5,
//          left: null,
//          right: 8 (node B)
// }
// currently valid AVL tree
// .add called with 9
// node B = {
//          value: 8,
//          left: null,
//          right: 9 (node C)
// }
// (on the way up from recursion)
// check balance of node C: left height is 0, right height is 0, balanced
// check balance of node B: left height is 0, right height is 1, balanced
// check balance of node A: left height is 0, right height is 2, unbalanced, right heavy, child is right heavy

// perform right rotation
// swap the values of nodes A and B
// make node B the right child of node A
// make node C the left child of node A
// move node B's left child to it's right child
    //(in this case they're both null)
// make node A's _original_ right child 
    //(which was null in this case) the right child of node B
// update the heights of all the nodes involved