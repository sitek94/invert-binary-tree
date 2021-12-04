export type Node = {
  value: number;
  left: Node | null;
  right: Node | null;
};

/**
 * Inverts a binary tree in place (mutates the original object)
 */
export function invertTree(node: Node) {
  if (node.left && node.right) {
    let tmp = node.left;
    node.left = node.right;
    node.right = tmp;

    invertTree(node.right);
    invertTree(node.left);
  }
}
