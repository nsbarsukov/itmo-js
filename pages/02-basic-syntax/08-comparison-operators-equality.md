---
class: host
---

# Операторы сравнения
Знаки равенства

```js {all|1-6|8-13|4,11|hide}
// Строгое равенство
42 === 42; // true
42 === 24; // false
1 === true; // false
'42' === 42; // false
'42' === true; // false

// Нестрогое равенство (с приведением типов)
42 == 42; // true
42 == 24; // false
1 == true; // true
'42' == 42; // true
'42' == true; // false
```

<div v-click="4">

```js
/*
ИСКЛЮЧЕНИЯ!
При нестрогом сравнении null и undefined равны
друг другу и не равны никаким другим значениям
*/
console.log(null == undefined); // true
console.log(0 == null); // false
```
</div>


<style>
.host code {
    font-size: 1.25rem;
}

.host .slidev-vclick-hidden {
    display: none;
}
</style>
