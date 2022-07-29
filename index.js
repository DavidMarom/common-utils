import styled from 'styled-components'

function CenterVH(el, w = "100%", h = "100%") {
    const CenterVH = styled.div`
    height:  ${props => (props.h)};
    width:  ${props => (props.w)};
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #00ff00;
    `;
    return <CenterVH w={w} h={h}>{el}</CenterVH>
}

function getCUVer() {
    return '1.4.2';
}

function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
}

function isNum(val) {
    return (val.charCodeAt(0) > 47 && val.charCodeAt(0) < 58);
}

function saveJSONtoLocalStorage(key, json) {
    localStorage.setItem(key, JSON.stringify(json));
}

function getJSONfromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function findIntersection(arr1, arr2) {
    let a = arr1.split(', ')
    let b = arr2.split(', ')
    var result = a.filter(x => b.find(a => a === x))
    return result.length > 0 ? result.join(',') : 'false'
}

// Binary Tree ==============================================
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function createBinaryTree() {
    return new BinarySerachTree;
}

class BinarySerachTree {
    constructor() {
        this.root = null;
    }

    // INSERT
    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;

            while (true) {
                if (value === current.value) return undefined;
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }

                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    // FIND
    find(value) {
        if (this.root === null) return false;
        let current = this.root, found = false
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        } //while
        if (!found) return undefined
        return current;
    }

    // BFS - Breadth First Search
    BFD() {
        let data = [], queue = [], node = this.root;
        queue.push(this.root);

        while (queue.length) {
            node = queue.shift()
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }
} // end of class binary tree

module.exports = {
    CenterVH,
    getCUVer,
    isLetter,
    isNum,
    saveJSONtoLocalStorage,
    getJSONfromLocalStorage,
    findIntersection,
    createBinaryTree
};
