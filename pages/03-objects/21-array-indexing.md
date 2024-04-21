---
class: host
---

# Индексация массивов

```js
const fruits = ["Яблоко", "Апельсин", "Слива"];

fruits[0] // "Яблоко"
fruits[1] // "Апельсин"
fruits[2] // "Слива"
```

<blockquote v-click="1">

````md magic-move {at:2}
```js
fruits[3] // ???
```

```js
fruits[3] // undefined
```
````

<div v-click="2">
    Обращение к несуществующему индексу массива вернет <strong>undefined</strong>!
</div>
</blockquote>

<br />

```js {hide|hide|hide|all}{at:1}
const fruits = ['Яблоко', 'Апельсин', 'Слива'];

console.log(fruits); // [ 'Яблоко', 'Апельсин', 'Слива' ]
fruits[1] = 'Банан';
console.log(fruits); // [ 'Яблоко', 'Банан', 'Слива' ]

fruits[3] = 'Киви';
console.log(fruits); // [ 'Яблоко', 'Апельсин', 'Слива', 'Киви' ]
```

<style>
.host code {
  font-size: 1rem;
}

.host .slidev-vclick-hidden {
    display: none;
}
</style>
