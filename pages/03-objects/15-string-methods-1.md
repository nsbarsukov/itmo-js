---
class: host
transition: fade
---

# Методы строк

<v-clicks at="0">
<ul>

<li>

`str.length` – длина строки
```js
'итмо'.length // 4
```
</li>

<li>

`str.toUpperCase()` и `str.toLowerCase()` – позволяют менять регистр всех символов в строке
```js
'вот бы вырасти'.toUpperCase(); // 'ВОТ БЫ ВЫРАСТИ'
'ВОТ БЫ УМЕНЬШИТЬСЯ'.toLowerCase(); // 'вот бы уменьшиться'
```
</li>

<li>

`str.includes(substr)` и `str.indexOf(substr)` – поиск одной строки внутри другой
```js
// `includes` возвращает `true` / `false`
'дикобраз'.includes('кобра'); // true

// `indexOf` возвращает индекс символа, с которого начинается искомая подстрока (или -1)
'дикобраз'.indexOf('кобра'); // 2 
```
</li>

<li>

`str.startsWith(substr)` и `str.endsWith(substr)` – позволяют узнать начинается или заканчивается строка определенной подстрокой
```js
'дикобраз'.endsWith('кобра'); // false 
'дикобраз'.endsWith('образ'); // true 
```
</li>

</ul>
</v-clicks>

<style>
.host li p {
    margin-bottom: 0.25rem;
}
</style>
