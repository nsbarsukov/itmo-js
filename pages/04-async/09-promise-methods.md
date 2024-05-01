---
class: host
---

# Методы промиссов

<v-clicks at="0">

- `then` – вызывается в случае успешного завершения промисса («**pending**» => «**fulfilled**»)
  ```js
  request('https://website1.com')
      .then(response => console.log('Результат запроса:', response));
  ```
- `catch` – вызывается в случае ошибочного завершения («**pending**» => «**rejected**»)
  ```js
  request('https://website1.com')
    .catch(err => console.log('Ошибка запроса:', err));
  ```
- `finally` - вызывается при любом исходе (смена «**pending**» в любое другое состояние)
  ```js
  request('https://website1.com')
      .finally(() => console.log('я выполнюсь в любом случае'));
  ```

</v-clicks>

<div v-click="3">

**Цепочка промисов**
```js
request('https://website1.com')
   .then(response => console.log('Результат запроса:', response))
   .catch(err => console.log('Ошибка запроса:', err))
   .finally(() => console.log('я выполнюсь в любом случае'));
```
</div>

<style>
.host li {
  margin-bottom: 1rem;
}
</style>
