
class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
    }
}

class Tree {
    constructor(rootValue) {
        this.root = new TreeNode(rootValue);
    }

    traverse(node = this.root) {
        console.log(node.value);
        node.children.forEach(child => this.traverse(child));
    }
}
function findTreeHeight(node) {
    if (node === null) return -1;
    if (node.children.length === 0) return 0;

    let maxChildHeight = 0;
    node.children.forEach(child => {
        maxChildHeight = Math.max(maxChildHeight, findTreeHeight(child));
    });

    return maxChildHeight + 1;
}


// Example Usage
const tree = new Tree(1);
const child1 = new TreeNode(2);
const child2 = new TreeNode(3);
tree.root.addChild(child1);
tree.root.addChild(child2);

child1.addChild(new TreeNode(4));
child1.addChild(new TreeNode(5));

child2.addChild(new TreeNode(6));
child2.addChild(new TreeNode(7));

console.log("Tree Traversal:");
tree.traverse(); // Output: 1, 2, 4, 5, 3, 6, 7

// Example Usage
console.log("Tree Height:", findTreeHeight(tree.root)); 
