---
class: host
transition: fade
---

# Методы массивов

<v-clicks at="0">
<ul>

<li>

`arr.push`, `arr.pop`, `arr.shift`, `arr.unshift` – добавление/удаление элементов массива
</li>

<li>

`arr.map(fn)`
```js
const fruits = ["Яблоко", "Апельсин", "Слива"];
const bigFruits = fruits.map(str => str.toUpperCase());

console.log(bigFruits); // [ 'ЯБЛОКО', 'АПЕЛЬСИН', 'СЛИВА' ]
```
</li>

<li>

`arr.filter(fn)`
```js
const digits = [1, 1, 2, 3, 4, 5, 6, 6];
const odds = digits.filter(x => x % 2);

console.log(odds); // [ 1, 1, 3, 5 ]
```
</li>

<li>

`arr.find(fn)` и `arr.findIndex`
```js
const names = ['alex', 'bob', 'harry', 'boris'];

names.find(x => x.startsWith('b')); // 'bob'
names.findIndex(x => x.startsWith('b')); // 1
```
</li>

</ul>
</v-clicks>

<style>
.host li p {
    margin-bottom: 0.25rem;
}
</style>
