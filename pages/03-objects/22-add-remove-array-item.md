---
class: host
---

# Добавление/удаление элементов массива
<v-clicks at="0">
<ul>

<li>

`arr.push(item1, item2, …, itemN)` – добавляет элемент(-ы) в конец массива
```js
const arr = [0];
arr.push(1, 2);
console.log(arr); // [0, 1, 2]
```
</li>

<li>

`arr.pop()` – удаляет последний элемент из массива и возвращает этот удаленный элемент
```js
const arr = [0, 1, 2];
const deletedItem = arr.pop();
console.log(arr); // [0, 1]
```
</li>

<li>

`arr.shift()` – удаляет первый элемент из массива и возвращает этот удаленный элемент
```js
const arr = [0, 1, 2];
const deletedItem = arr.shift();
console.log(arr); // [1, 2]
```
</li>

<li>

`arr.unshift(item1, item2, …, itemN)` – добавляет элемент(-ы) в начало массива
```js
const arr = [0];
arr.unshift(1, 2);
console.log(arr); // [1, 2, 0]
```
</li>

</ul>
</v-clicks>

<style>
.host li p {
    margin-top: 0.5rem;
    margin-bottom: 0.25rem;
}

.host h1 {
    margin-bottom: 0.25rem;
}
</style>
