---
class: host
transition: fade
---

# Основные операции с объектом
Процесс создания объекта

<div class="wrapper">

```js
const secondKey = 'age';

const user = {
    // под ключом "name" хранится значение "John"
    name: "John",
    // под ключом "age" хранится значение 30
    [secondKey]: 30
};

console.log( user.name ); // John
console.log( user.age ); // 30
console.log( user[secondKey] ); // 30
```

<img src="/images/03-objects/user-shelf-0.svg">
</div>

<style>
.wrapper {
    display: flex;
    height: 80%;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
}
.wrapper div,
img {
    flex: 1;
}

.wrapper div {
    max-width: 50%;
}

img {
    max-width: 50%;
    align-self: baseline;
}

.host code {
    font-size: 0.9rem;
}
</style>
