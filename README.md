![dm common utils](https://res.cloudinary.com/dojmo7vcc/image/upload/v1659037669/cujs3_jxygol.png)
![npm version](https://img.shields.io/npm/v/react-redux.svg?style=flat-square)
# Common Utils
Everyday functions you always need.

### Install
```npm i @davidmarom/dm-common-utils```

## Use
```js
import  *  as  cu  from  '@davidmarom/dm-common-utils';
console.log(cu.getCUVer());
```

- getCUVer() - get current version
- isLetter(char)
- isNum(char)
- saveJSONtoLocalStorage(key, JSON)
- getJSONfromLocalStorage(key)
- findIntersection(arr1, arr2)
- createBinaryTree()
---

### Binary Tree
```js
const  myTree = createBinaryTree();

myTree.insert('value');
myTree.find('value');
myTree.BFD();
```