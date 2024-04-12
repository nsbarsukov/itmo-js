---
class: host
---

# Условное ветвление
Тернарный оператор

```js
const age = +prompt('Ваш возраст?');

if (age >= 18) {
   console.log('Доступ разрешен');
} else {
   console.log('Иди уроки учить!');
}
```

<div class="arrow" v-click>↓</div>

<div v-after>

```js
const age = +prompt('Ваш возраст?');

console.log(age >= 18 ? 'Доступ разрешен' : 'Иди уроки учить!');
```
</div>

<style>
.host code {
    font-size: 1.25rem;
}

.host .arrow {
    font-size: 3rem;
    text-align: center;
    color: gray;
}
</style>
