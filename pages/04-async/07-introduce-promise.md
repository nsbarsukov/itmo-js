---
class: host
---

# Promise 
Это объект-обёртка для асинхронного кода. Обычно его так и называют – «промис» (а не «обещание»).

Возможные его состояния:
- pending («ожидание»)
- fulfilled («выполнено успешно»)
- rejected («выполнено с ошибкой»)

<br />

```js
const fulfilledPromise = new Promise((resolve, reject) => {
   resolve('успех');
});

const rejectedPromise = new Promise((resolve, reject) => {
   reject('не повезло, не фортануло');
});
```

<style>
.host {
    --slidev-code-font-size: 1rem;
    --slidev-code-line-height: 1.25rem;
}
</style>
