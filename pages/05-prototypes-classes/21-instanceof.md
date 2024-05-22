---
layout: default
class: host
---

# Оператор instanceOf
Позволяет проверить, принадлежит ли объект указанному классу, с учётом наследования

```js
obj instanceof Class
```

<br />

```js {hide|all}{at:1}
class Animal {}
class Cat extends Animal {}

console.log(new Cat() instanceof Cat); // true
console.log(new Cat() instanceof Animal); // true
```

<br />

```js {hide|hide|all}{at:1}
let arr = [1, 2, 3];
console.log( arr instanceof Array ); // true
console.log( arr instanceof Object ); // true
```

<style>
.host {
    --slidev-code-font-size: 1.25rem;
    --slidev-code-line-height: 1.5rem;
}
</style>
