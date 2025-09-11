# Javascript Interview Questions

* How to create immutable object
    - Object.freeze()
* shallow cloning vs Deepcloning vs DeepFreezing
    - Object.assign({},source) can be used for shallow cloning
    - Object.assign({},JSON.parse(JSON.stringify(obj))) can be used for deepcloning
    - Object.freeze() recursively can be used for all nested property for deep freezing

