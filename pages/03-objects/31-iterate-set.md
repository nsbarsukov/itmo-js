---
class: host
---

# Set и массивы – "родственные души" 

<v-clicks at="0">
<ul>

<li>

Итерация по `Set` через цикл `for … of`
```js
const fruits = new Set([
   'апельсин',
   'яблоко',
   'банан',
   'яблоко',
]);

for (const fruit of fruits) {
   console.log(fruit); // 'апельсин', 'яблоко', 'банан'
}
```
</li>

<li>

Преобразование `Set` в массив
```js
const set = new Set([1, 1, 2, 3]);

Array.from(set) // [1, 2, 3]
```
</li>

</ul>
</v-clicks>

<style>
.host code {
    font-size: 1rem;
}
</style>
