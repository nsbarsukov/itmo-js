---
class: host
---

# Создадим функцию request
Пусть она будет имитировать запрос на сервер

```js
function request(url) {
    const randomInteger = Math.round(Math.random() * 10);
    
    setTimeout(() => {
        console.log('Результат ответа бекенда: ', randomInteger);
    }, randomInteger * 100);
}

request('https://itmo.ru'); // (3) Ура, как будто бы отправили "запрос" на сервер, успех!

console.log('Я залогируюсь самым первым'); // (1)
console.log('Я вторым'); // (2)
```

<style>
.host {
    --slidev-code-font-size: 1rem;
    --slidev-code-line-height: 1.25rem;
}
</style>
