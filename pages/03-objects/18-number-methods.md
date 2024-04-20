---
class: host
transition: fade
---

# Методы чисел

<v-clicks at="0">
<ul>

<li>

`num.toFixed(n)` – преобразует число в строку с указанным количеством знаков после запятой
```js
3.44.toFixed(1); // 3.4
3.45.toFixed(1); // 3.5
```
</li>

<li>

`num.toString(radix)` – преобразует число в строку в указанной системе счисления
```js
7..toString(2); // 111
```
</li>

<li>

`Number.isNaN(smth)` – проверить значение на `NaN`
```js
NaN === NaN; // false
Number.isNaN(NaN); // true
```
</li>

<li>

`Number.isFinite(smth)`
```js
Number.isFinite(4); // true
Number.isFinite(NaN); // false
Number.isFinite(Infinity); // false
Number.isFinite('hello'); // false
```
</li>

<li>

`Number.parseInt(str)` и `Number.parseFloat` – "продвинутые" методы для преобразования строки к числу
```js
Number('12px'); // NaN
Number.parseInt('12px'); // 12
```
</li>

</ul>
</v-clicks>

<style>
.host h1 {
    margin-bottom: 0.5rem;
}

.host li p {
    font-size: 1rem;
    margin-bottom: 0.25rem;
    margin-top: 0.25rem;
}
</style>
