---
class: host
---

# Fetch 
Встроенная утилита для форминания сетевых запросов и получения информацию с сервера

````md magic-move
```js
fetch('https://api.github.com/users/nsbarsukov', options);
```

```js
fetch('https://api.github.com/users/nsbarsukov')
    .then(response => console.log('Запрос завершился с успехом'))
    .catch(err => console.log('Запрос упал с ошибкой'))
```

```js
fetch('https://api.github.com/users/nsbarsukov')
   .then(response => {
       console.log(response.status); // 200
       console.log(response.ok); // true
   })
   .catch(err => console.log('Запрос упал с ошибкой'));
```

```js
fetch('https://api.github.com/users/nsbarsukov')
   .then(response => {
       console.log(response.status); // 200
       console.log(response.ok); // true

       return response.json();
   })
   .catch(err => console.log('Запрос упал с ошибкой'));
```

```js
fetch('https://api.github.com/users/nsbarsukov')
   .then(response => {
       console.log(response.status); // 200
       console.log(response.ok); // true

       return response.json();
   })
   .then(profileInfo => {
        console.log(profileInfo.name); // 'Nikita Barsukov'
   })
   .catch(err => console.log('Запрос упал с ошибкой'));
```

````

<style>
.host {
    --slidev-code-font-size: 1.25rem;
    --slidev-code-line-height: 1.75rem;
}
</style>
