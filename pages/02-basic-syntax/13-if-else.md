---
class: host
---

# Условное ветвление
if … else
````md magic-move

```js
const age = +prompt('Ваш возраст?');

if (age >= 18) {
    console.log('Доступ разрешен');
} else {
    console.log('Иди уроки учить!');
}
```

```js
const age = +prompt('Ваш возраст?');

if (age > 200) {
   console.log('Многовато!');
} else if (age < 0) {
   console.log('Возраст не может быть отрицательным!');
} else if (age >= 18) {
   console.log('Доступ разрешен');
} else {
   console.log('Иди уроки учить!');
}
```

```js
const age = prompt('Ваш возраст?');

// Если пользователь нажал "Отмена" => undefined
if (age !== undefined) {
   console.log('Какой прекрасный возраст!');
}
```

```js
const age = +prompt('Ваш возраст?');

// Если пользователь нажал "Отмена" => undefined
if (age) {
   console.log('Какой прекрасный возраст!');
}
```

````


<style>
.host {
    --slidev-code-font-size: 1.25rem;
    --slidev-code-line-height: 2rem;
}
</style>
