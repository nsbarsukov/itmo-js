---
layout: default
class: host
---

# Про правила наименования переменных

При присвоении имени переменной <span v-mark.red="0">РЕКОМЕНДУЕТСЯ</span>:
<ul>
<li>
Использовать верблюжью нотацию, если название переменной содержит несколько слов
```js
const longVariableName = 123;
```
</li>

<img src="/images/01-js-intro/camel-case.png" v-click.hide />

<li v-after>
В качестве исключения можно использовать кричащую змеиную нотацию для некоторых констант
</li>

<img src="/images/01-js-intro/different-naming-cases.png" v-after />

</ul>

<style>
    .host li p {
        margin-bottom: 0;
    }

    .host img {
        max-width: 50%;
        margin: auto;
    }

    .host .slidev-vclick-hidden {
        display: none;
    }
</style>

