---
class: host
---

# Promise API

<ul>

<li>

`Promise.race`
````md magic-move {at:1}
```js
Promise.race([
    new Promise(resolve => setTimeout(() => resolve(1), 400)),
    new Promise((_, reject) => setTimeout(() => reject(-1), 200)),
    new Promise(resolve => setTimeout(() => resolve(3), 300))
])
    .then(x =>  console.log('Успех:', x))
    .catch(x =>  console.log('Ошибка:', x))
```

```js
Promise.race([
    new Promise(resolve => setTimeout(() => resolve(1), 400)),
    new Promise((_, reject) => setTimeout(() => reject(-1), 200)),
    new Promise(resolve => setTimeout(() => resolve(3), 300))
])
    .then(x =>  console.log('Успех:', x))
    .catch(x =>  console.log('Ошибка:', x)) // Ошибка: -1
```
````
</li>

<li v-click="2">

`Promise.any`
```js
Promise.any([
    Promise.reject(1),
    Promise.reject(2),
    Promise.reject(3),
])
    .then(x =>  console.log('Успех:', x))
    .catch(x =>  console.log('Ошибка:', x.errors)) // Ошибка: [1, 2, 3]
```
</li>

</ul>

<style>
.host {
    --slidev-code-font-size: 1rem;
    --slidev-code-line-height: 1.25rem;
}

.host li p {
    margin-bottom: 0.25rem;
}
</style>
