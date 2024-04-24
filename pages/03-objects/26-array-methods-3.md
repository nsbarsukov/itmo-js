---
class: host
---

# Методы массивов

<v-clicks at="0">
<ul>

<li>

`str.split(separator)` и `arr.join(separator)`
```js
const fruits = 'Яблоко, Банан, Апельсин'.split(', ');

console.log(fruits); // [ 'Яблоко', 'Банан', 'Апельсин' ]
console.log(fruits.join('; ')) // 'Яблоко; Банан; Апельсин'
```
</li>

<li>

`arr.some(fn)` и `arr.every(fn)`
```js
const arr = [2, 4, 5, 6, 8, 10];

const areAllNumbers = arr.every(x => typeof x === 'number');
const hasOdd = arr.some(x => x % 2);

console.log(areAllNumbers); // true
console.log(hasOdd); // true
```
</li>

</ul>
</v-clicks>

<style>
.host code {
    font-size: 1rem;
}

.host li p {
    margin-bottom: 0.25rem;
}
</style>
