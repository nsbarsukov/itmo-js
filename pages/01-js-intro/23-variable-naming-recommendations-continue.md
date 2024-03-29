---
layout: default
class: host
---

# Про правила наименования переменных

При присвоении имени переменной <span v-mark.red="0">РЕКОМЕНДУЕТСЯ</span>:
<ul>
<li>
Использовать верблюжью нотацию, если название переменной содержит несколько слов.<br/>
В качестве исключения можно использовать кричащую змеиную нотацию для некоторых констант.

```js
const hasAccess = user.age >= 18;
const MS_IN_DAY = 24 * 60 * 60 * 1000;
```
</li>

<li>
Используйте только латиницу
```js
const name = 'Никита'; // ✅
const имя = 'Никита'; // ❌ (но ошибок не будет)
```
</li>

<li>
Придумывайте правильные имена
```js
const data = {}; // ❌
const userProfile = {}; // ✅

const elementsHasTheSameProperties = false; // ❌
const areElementsEqual = false; // ✅
```
</li>

</ul>

<style>
    .host li p {
        margin-bottom: 0;
    }

    .host li {
        margin-bottom: 1rem;
    }
</style>

