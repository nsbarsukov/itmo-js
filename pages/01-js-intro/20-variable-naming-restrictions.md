---
layout: default
class: host
---

# Про правила наименования переменных

При присвоении имени переменной <span v-mark.red="0">ЗАПРЕЩЕНО</span>:

<ul>

<li>

**Запрещено** использовать что-то кроме букв, цифр, а также символов `$` и `_`

```js
const var2 = 123; // ✅
const имя = 'Никита'; // ✅
const $ = {}; // ✅
const _ = '...'; // ✅

const @ = 123; // ❌ SyntaxError: Unexpected character '@'
const ! = 'no!'; // ❌
```
</li>

<li v-click>

**Запрещено** первым символом использовать цифру

```js
const var1 = ''; // ✅
const 1var = ''; // ❌ SyntaxError: Identifier directly after number
```
</li>

<li v-click>

**Запрещено** в качестве имен переменных использовать зарезервированные слова

```js
let let1 = 42; // ✅
let let = 42; // ❌ SyntaxError: Unexpected strict mode reserved word
const let = 42; // ❌

```
</li>

</ul>

<style>
    .host li p {
        margin-bottom: 0;
    }
</style>

