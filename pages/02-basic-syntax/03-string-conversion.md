---
class: host
---

# Строковое преобразование типа

```js {1-6|8-9}
String(1); // '1'
String(true); // 'true'
String(false); // 'false'
String(null); // 'null'
String(undefined); // 'undefined'
String(999n); // '999'

// Пример неявного строкого преобразования
console.log('12' + 3) // '123'
```


<style>
.host code {
    font-size: 1.75rem;
}
</style>
