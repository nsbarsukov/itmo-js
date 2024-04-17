---
class: host
transition: fade
---

# Основные операции с объектом
Добавление свойства в уже существующий объект

<div class="wrapper">

```js
const secondKey = 'age';

const user = {
    name: "John",
    [secondKey]: 30
};

user.isAdmin = true;
```

<img src="/images/03-objects/user-shelf-1.svg">
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
