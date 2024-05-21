---
class: host
---

# Докажем, что массивы наследуются об объектов

````md magic-move
```js
const arr = [1, 2, 3]; // const arr = new Array(1, 2, 3);
```

```js
const arr = [1, 2, 3]; // const arr = new Array(1, 2, 3);


const arrPrototype = Object.getPrototypeOf(arr);

console.log(arrPrototype === Array.prototype); // true
```

```js
const arr = [1, 2, 3]; // const arr = new Array(1, 2, 3);


const arrPrototype = Object.getPrototypeOf(arr);

console.log(arrPrototype === Array.prototype); // true


const parentPrototype = Object.getPrototypeOf(arrPrototype);

console.log(parentPrototype === Object.prototype); // true
```

```js
const arr = [1, 2, 3]; // const arr = new Array(1, 2, 3);


const arrPrototype = Object.getPrototypeOf(arr);

console.log(arrPrototype === Array.prototype); // true


const parentPrototype = Object.getPrototypeOf(arrPrototype);

console.log(parentPrototype === Object.prototype); // true


console.log(Object.getPrototypeOf(parentPrototype)); // null
```
````

<style>
.host {
    --slidev-code-font-size: 1.25rem;
    --slidev-code-line-height: 1.5rem;
}
</style>
