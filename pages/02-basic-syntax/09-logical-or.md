---
class: host
---

# Логическое ИЛИ
Обозначается двумя символами вертикальной черты

```js
true  || true   // true
false || true  // true
true  || false  // true
false || false // false
```

<br />

```js {hide|all}
let result = 0 || null || undefined || '42' || '';

console.log(result); // '42'
```


<style>
.host code {
    font-size: 1.75rem;
}
</style>
