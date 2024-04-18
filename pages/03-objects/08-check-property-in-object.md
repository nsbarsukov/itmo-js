---
class: host
---

# Проверка наличия свойства в объекте

````md magic-move

```js
const user = {
    name: "John",
};

console.log(user.university); // undefined
```

```js
const user = {
    name: "John",
};

console.log(user.university); // undefined

const hasUniversity = user.university !== undefined;

console.log(hasUniversity) // false
```

```js
const user = {
   name: "John",
   university: undefined // лучше бы null, но вот имеем такое
};

console.log(user.university); // undefined

const hasUniversity = user.university !== undefined;

console.log(hasUniversity) // false
```

```js
const user = {
   name: "John",
   university: undefined // лучше бы null, но вот имеем такое
};

const user2 = {
   name: "Bob",
};

console.log('university' in user); // true
console.log('university' in user2); // false
```

````


<style>
.host {
    --slidev-code-font-size: 1.25rem;
    --slidev-code-line-height: 2rem;
}
</style>
