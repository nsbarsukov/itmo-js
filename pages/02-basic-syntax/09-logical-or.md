---
class: host
---

# Логическое ИЛИ

```js
true || true   // true
false || true  // true
true || false  // true
false || false // false
```

<br />

```js {hide|all}
const result = 0 || null || undefined || '42' || '';

console.log(result); // '42'
```


<style>
.host code {
    font-size: 1.5rem;
}
</style>
