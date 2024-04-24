---
class: host
---

# Способы создания непустого Map

<v-clicks at="0">
<ul>

<li>

Через массив пар значений с ключом и свойством ("entries")
```js
const map = new Map([
    ['key1',  'value1'],
    [2,    'num2'],
    [true, 'bool2']
]);

console.log( map.get('key1') ); // 'value1'
```
</li>

<li>

Из "классического" объекта с помощью `Object.entries`
```js
const obj = {
    name: "John",
    age: 30
};
const map = new Map(Object.entries(obj));

console.log( map.get('name') ); // John
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
