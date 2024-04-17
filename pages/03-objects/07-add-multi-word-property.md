---
class: host
transition: fade
---

# Основные операции с объектом
Добавление свойства c нестандартным ключом

<div class="wrapper">

```js
const user = {
    name: "John",
    age: 30
};

// user.likes birds = true ❌ Будет ошибка
user['likes birds'] = true // ✅

// А можно вместо строк выше сразу так
user = {
    name: "John",
    age: 30,
    // имя свойства из нескольких слов должно быть в кавычках
    "likes birds": true 
};

console.log( user['likes birds'] ); // true
```

<img src="/images/03-objects/user-shelf-3.svg">
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
    max-width: 70%;
}

img {
    max-width: 40%;
}

.host code {
    font-size: 0.9rem;
}
</style>
