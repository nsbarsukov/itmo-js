---
class: host
transition: fade
---

# Методы массивов

<v-clicks at="0">
<ul>

<li>

`arr.forEach(fn)`
```js
for (const fruit of ["Яблоко", "Апельсин", "Слива"]) {
    console.log(fruit);
}
```

```js
["Яблоко", "Апельсин", "Слива"].forEach(x => console.log(x));
```
</li>

<li>

`arr.includes(item)` и `arr.indexOf(item)`
```js
const arr = [0, 1, 2, 3, -3, 5, 6];

arr.includes(-3); // true
arr.indexOf(-3); // 4
```
</li>

<li>

`arr.reverse()`
```js
const arr = [1, 2, 3, 4, 5];
arr.reverse();

console.log(arr); // [ 5, 4, 3, 2, 1 ]
```
</li>

</ul>
</v-clicks>

<style>
.host li p {
    margin-bottom: 0.25rem;
}
</style>
