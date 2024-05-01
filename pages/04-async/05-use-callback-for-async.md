---
class: host
---

# Асинхронность через callbacks

````md magic-move
```js
function request(url, callback) {
    const randomInteger = Math.round(Math.random() * 10);

    setTimeout(() => {
        callback(randomInteger);
    }, randomInteger * 100);
}

request(
    'https://itmo.ru',
    respose => console.log('Результат ответа бекенда: ', respose) // (3)
);

console.log('Я залогируюсь самым первым'); // (1)
console.log('Я вторым'); // (2)
```

```js
function request(url, callback) {
    const randomInteger = Math.round(Math.random() * 10);

    setTimeout(() => {
        callback(randomInteger);
    }, randomInteger * 100);
}

request(
    'https://itmo.ru',
    id => request(
        `https://api.github.com/users/${id}`,
        response => console.log('Подробная информации о пользователе:', response) // 3
    )
);

console.log('Я залогируюсь самым первым'); // (1)
console.log('Я вторым'); // (2)
```

````

<style>
.host {
    --slidev-code-font-size: 1rem;
    --slidev-code-line-height: 1.25rem;
}
</style>
