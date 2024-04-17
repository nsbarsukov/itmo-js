---
class: host
---

# Основные операции с объектом
Удаление свойства в уже существующем объекте

<div class="wrapper">

```js
const secondKey = 'age';

const user = {
    name: "John",
    [secondKey]: 30
};

user.isAdmin = true;

delete user.age;
// или так тоже можно
// delete user[secondKey];
```

<img src="/images/03-objects/user-shelf-2.svg">
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
    font-size: 1rem;
}
</style>
