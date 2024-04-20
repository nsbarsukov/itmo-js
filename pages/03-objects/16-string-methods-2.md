---
class: host
---

# Методы строк

<v-clicks at="0">
<ul>

<li>

`str.replace(oldSubstr, newSubstr)` и `str.replaceAll(oldSubstr, newSubstr)` – для замены одной части строки на другой
```js
'Яблоко - вкусный овощ'.replace('овощ', 'фрукт'); // 'Яблоко - вкусный фрукт'
```
</li>

<li>

`str.trim()` , `str.trimStart()` и `str.trimEnd()` – методы для очистки строк от пробелов и символов окончания строки
```js
'  привет  '.trim(); // 'привет'
```
</li>

<li>

`str.repeat(n)` – повторяет строку `n`-раз
```js
'#'.repeat(3); // '###'
```
</li>

<li>

`str.slice(start, end)` – возвращает часть строки от `start` до (не включая) `end`
```js
'дикобраз'.slice(2, 7); // 'кобра'
```
</li>

<li>

`str.split(separator)` – разбивает строку на отдельные подстроки
```js
const words = 'Мама мыла раму'.split(' '); // ['Мама', 'мыла', 'раму']
```
</li>

</ul>
</v-clicks>

<style>
.host li p {
    margin-bottom: 0.25rem;
}
</style>
